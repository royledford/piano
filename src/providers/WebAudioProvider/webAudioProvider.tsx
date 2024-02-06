import { createContext, useState, ReactNode, useContext } from 'react'
import { KeyMapType } from '@/Types'

type Props = {
  children?: ReactNode | undefined
}

type AudioType = any

const WebAudioContext = createContext<AudioType>(undefined)

// Define the provider that will be used to wrap in the app.
const WebAudioProvider = ({ children }: Props): AudioType => {
  const [actx, setActx] = useState<any>()
  const [oscs, setOscs] = useState<any>([])

  const play = (keyMap: KeyMapType) => {
    let context = actx
    if (!context) {
      context = new AudioContext()
      if (!context) {
        throw 'Web Audio API is not supported'
      }

      setActx(context)
    }

    // check that it's not playing
    if (getOsc(oscs, keyMap)) return null
    console.log('keyMap', keyMap) // TODO: remove this

    const osc = playNote(context, keyMap)
    setOscs((oscs: any) => [...oscs, osc])
  }

  const stop = (keyMap: KeyMapType) => {
    console.log('oscs', oscs) // TODO: remove this

    const currentOsc = getOsc(oscs, keyMap)
    const remainingOsc = oscs.filter((v) => v.key !== keyMap.keyboard)
    currentOsc.stop()

    setOscs((oscs: any) => [...remainingOsc])
  }

  return (
    <WebAudioContext.Provider value={[actx, play, stop]}>
      {children}
    </WebAudioContext.Provider>
  )
}

function playNote(actx: any, keyMap: KeyMapType): any {
  let oscBank = []

  oscBank[0] = createOscillator(actx, keyMap.hertz, 0)
  // const osc = actx.createOscillator()
  // osc.type = 'sawtooth'
  // osc.frequency.value = keyMap.hertz
  // osc.key = keyMap.keyboard
  // osc.connect(actx.destination)
  // osc.start()
  return oscBank[0]
}

function getOsc(oscs: any, map: KeyMapType): any {
  const osc = oscs.filter((v: any) => v.key === map.keyboard)
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
