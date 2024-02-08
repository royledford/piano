import { createContext, useState, ReactNode, useContext } from 'react'
import { useDevice } from './device-provider'
import { ToneMapType, DeviceOscType } from '@/Types'

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

// Define the provider that will be used to wrap in the app.
const WebAudioProvider = ({ children }: Props): AudioType => {
  const { state, dispatch } = useDevice()
  const [actx, setActx] = useState<any>()
  const [oscs, setOscs] = useState<OscsStorage[]>([])

  const play = (tone: ToneMapType) => {
    let context = actx
    if (!context) {
      context = new AudioContext()
      if (!context) {
        throw 'Web Audio API is not supported'
      }

      setActx(context)
    }

    // if currently playing, ignore
    if (getOsc(oscs, tone)) return null

    const oscBank = playNote(
      context,
      tone,
      state.toneUnisonWidth,
      state.oscType
    )
    setOscs((oscs: any) => [...oscs, oscBank])
  }

  const stop = (tone: ToneMapType) => {
    const currentOsc = getOsc(oscs, tone)
    const remainingOsc = oscs.filter((v) => v.note !== tone.note)

    currentOsc.banks.forEach((o: any) => {
      o.stop()
    })

    setOscs((oscs: any) => [...remainingOsc])
  }

  return (
    <WebAudioContext.Provider value={[actx, play, stop]}>
      {children}
    </WebAudioContext.Provider>
  )
}

function playNote(
  actx: any,
  tone: ToneMapType,
  unisonWidth: number,
  oscType: DeviceOscType
): any {
  let osc: OscsStorage = { note: tone.note, banks: [] }

  osc.banks[0] = createOscillator(actx, tone.hertz, oscType, 0)
  osc.banks[1] = createOscillator(actx, tone.hertz, oscType, unisonWidth)
  osc.banks[2] = createOscillator(actx, tone.hertz, oscType, -unisonWidth)

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
  osc.connect(actx.destination)
  osc.start()
  return osc
}

export { WebAudioProvider, useActx }
