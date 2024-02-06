import { createContext, useState, ReactNode, useContext } from 'react'
import { KeyMapType } from '@/Types'

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
const unisonWidth = 10

// Define the provider that will be used to wrap in the app.
const WebAudioProvider = ({ children }: Props): AudioType => {
  const [actx, setActx] = useState<any>()
  const [oscs, setOscs] = useState<OscsStorage[]>([])

  const play = (keyMap: KeyMapType) => {
    let context = actx
    if (!context) {
      context = new AudioContext()
      if (!context) {
        throw 'Web Audio API is not supported'
      }

      setActx(context)
    }

    // if currently playing, ignore
    if (getOsc(oscs, keyMap)) return null

    const oscBank = playNote(context, keyMap)
    setOscs((oscs: any) => [...oscs, oscBank])
  }

  const stop = (keyMap: KeyMapType) => {
    const currentOsc = getOsc(oscs, keyMap)
    const remainingOsc = oscs.filter((v) => v.note !== keyMap.note)

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

function playNote(actx: any, keyMap: KeyMapType): any {
  let osc: OscsStorage = { note: keyMap.note, banks: [] }

  osc.banks[0] = createOscillator(actx, keyMap.hertz, 0)
  osc.banks[1] = createOscillator(actx, keyMap.hertz, unisonWidth)
  osc.banks[2] = createOscillator(actx, keyMap.hertz, -unisonWidth)

  return osc
}

function getOsc(oscs: any, map: KeyMapType): any {
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

function createOscillator(actx: any, freq: number, detune: number): any {
  const osc = actx.createOscillator()
  osc.type = 'sawtooth'
  osc.frequency.value = freq
  osc.detune.value = detune
  osc.connect(actx.destination)
  osc.start()
  return osc
}

export { WebAudioProvider, useActx }
