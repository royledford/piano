import { createContext, useState, ReactNode, useContext } from 'react'
import { useDevice } from './device-provider'
import { ToneMapType, DeviceOscType, DeviceState } from '@/Types'

type Props = {
  children?: ReactNode | undefined
}

type oscillator = any

type OscsStorage = {
  note: string
  banks: oscillator[]
}

type AudioType = any

const WebAudioContext = createContext<AudioType>(undefined)

// Define the provider.
const WebAudioProvider = ({ children }: Props): AudioType => {
  const [initialized, setInitialized] = useState(false)

  // TODO: rename state to deviceSettings
  const { state, dispatch } = useDevice()
  const [mainGainNode, setMainGainNode] = useState<any>(null)

  const [actx, setActx] = useState<any>()
  const [oscs, setOscs] = useState<OscsStorage[]>([])

  const init = () => {
    if (initialized) return [actx, mainGainNode]

    // make sure actx is initialized
    let context = null
    let mainGain = null
    context = new AudioContext()
    if (!context) {
      throw 'Web Audio API is not supported'
    }

    mainGain = context.createGain()
    mainGain.connect(context.destination)
    mainGain.gain.value = state.volume
    setActx(context)
    setMainGainNode(mainGain)

    setInitialized(true)
    return [context, mainGain]
  }

  // I think this should be renamed to 'keyPressed'
  const play = (tone: ToneMapType) => {
    const [context, mainGainNode] = init()

    // let context = actx
    // if (!context) {
    //   context = new AudioContext()
    //   if (!context) {
    //     throw 'Web Audio API is not supported'
    //   }

    //   setActx(context)
    // }

    // if currently playing, ignore
    if (getOsc(oscs, tone)) return null

    const oscBank = playNote(
      state,
      context,
      mainGainNode,
      tone,
      state.toneUnisonWidth,
      state.oscType
    )
    setOscs((oscs: any) => [...oscs, oscBank])
  }

  const stop = (tone: ToneMapType) => {
    const currentOsc = getOsc(oscs, tone)
    const remainingOsc = oscs.filter((v) => v.note !== tone.note)

    // handle a case when the mouse is pressed, then dragged over a key, then let up
    if (!currentOsc) return

    // stop all playing banks
    // currentOsc.banks.forEach((o: any) => {
    //   o.stop()
    // })

    // repurposing banks to store the gainNode
    const osc = currentOsc.banks[0]
    const gainNode = currentOsc.banks[1]
    const releasedAt = actx.currentTime
    gainNode.gain.cancelScheduledValues(releasedAt)
    gainNode.gain.setValueAtTime(gainNode.gain.value, releasedAt)
    gainNode.gain.linearRampToValueAtTime(0, releasedAt + state.adsr.release)

    osc.stop(releasedAt + state.adsr.release)

    setOscs((oscs: any) => [...remainingOsc])
  }

  return (
    <WebAudioContext.Provider value={[actx, play, stop]}>
      {children}
    </WebAudioContext.Provider>
  )
}

function playNote(
  deviceState: DeviceState,
  actx: any,
  mainGainNode: any,
  tone: ToneMapType,
  unisonWidth: number,
  oscType: DeviceOscType
): any {
  // gainNode.gain.cancelScheduleValues()
  let osc: OscsStorage = { note: tone.note, banks: [] }

  // TODO: for some reason having the 3 banks causes strange noises ???
  osc.banks[0] = createOscillator(actx, tone.hertz, oscType, 0)
  // osc.banks[1] = createOscillator(actx, tone.hertz, oscType, unisonWidth)
  // osc.banks[2] = createOscillator(actx, tone.hertz, oscType, -unisonWidth)

  // for now going to repurpose banks to store the gainNode.
  // [0] - the osc
  // [1] - the gainNode

  // adsr
  const pressedAt = actx.currentTime
  const gainNode = actx.createGain()
  gainNode.connect(actx.destination)
  gainNode.gain.setValueAtTime(0, pressedAt)
  gainNode.gain.linearRampToValueAtTime(
    deviceState.volume,
    pressedAt + deviceState.adsr.attack
  )
  gainNode.gain.setTargetAtTime(
    deviceState.adsr.sustain * deviceState.volume,
    pressedAt + deviceState.adsr.attack,
    deviceState.adsr.decay
  )

  osc.banks[0].connect(gainNode)
  osc.banks[1] = gainNode
  // TODO: starting the osc should happen here, not in create

  return osc
}

function getOsc(oscs: any, map: ToneMapType): any {
  const osc = oscs.filter((v: any) => v.note === map.note)
  return osc ? osc[0] : null
}

// Define a hook to access the context
function useActx() {
  const context = useContext(WebAudioContext)
  if (context === undefined) {
    throw new Error('useActx must be used with a WebAudioProvider')
  }

  return context
}

function createOscillator(
  actx: any,
  freq: number,
  oscType: DeviceOscType,
  detune: number
): any {
  const osc = actx.createOscillator()
  osc.type = oscType
  osc.frequency.value = freq
  osc.detune.value = detune
  osc.start()
  return osc
}

export { WebAudioProvider, useActx }
