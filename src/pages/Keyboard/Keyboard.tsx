import { useState, KeyboardEvent } from 'react'
import Display from '@/components/Display/Display'
import KeyPower from '@/components/KeyPower/KeyPower'
import Key from '@/components/Key/Key'
import { toneMap } from '@/lib/utils'
import { OnKeyHandler, DeviceActionTypes } from '@/Types'
import { useActx } from '@/providers/web-audio-provider'
import Button from '@components/Button/Button'
import { Keyboard as KeyboardIcon } from 'lucide-react'
import { AudioWaveformSine, ADSR } from '@/components/Icons'
import { useKeyboard } from '@/providers/keyboard-provider'
import { useDevice } from '@/providers/device-provider'
import { Knobs } from './Knobs'

export default function Keyboard() {
  const [actx, play, stop] = useActx()
  const { state, dispatch } = useDevice()
  const { pressedKeys, setPressedKeys } = useKeyboard()

  // TODO: Fix how pressed keys works, just clean up and add helper functions
  const handleKeyPlay: OnKeyHandler = (e, map) => {
    setPressedKeys([...pressedKeys, map.note])
    play(map)
  }

  const handleKeyStop: OnKeyHandler = (e, map) => {
    const updated = pressedKeys.filter((key) => key !== map.note)
    setPressedKeys([...updated])
    stop(map)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const map = Object.keys(toneMap).filter(
      (key) => toneMap[key].keyboard === e.key
    )

    const key = toneMap[map[0]]

    if (key) {
      setPressedKeys([...pressedKeys, key.note])
      play(key)
    }
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    const map = Object.keys(toneMap).filter(
      (key) => toneMap[key].keyboard === e.key
    )

    // If pressed key doesn't exist in toneMap, ignore
    if (map.length === 0) return

    const updated = pressedKeys.filter((key) => key !== map[0])
    setPressedKeys([...updated])

    stop(toneMap[map[0]])
  }

  return (
    <div
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={-1}
      className="flex items-center justify-center h-screen"
    >
      <div className="p-6 rounded-lg flex items-center justify-center bg-[#D5D1D0]">
        <div className="w-min">
          <div className="flex justify-center items-center border border-black border-b-0">
            <div className="flex flex-col">
              <div className="flex">
                <Button
                  onClick={() =>
                    dispatch({ type: DeviceActionTypes.ToggleOscType })
                  }
                >
                  <AudioWaveformSine color="black" strokeWidth={1} />
                </Button>
                <Button
                  onClick={() =>
                    dispatch({ type: DeviceActionTypes.ToggleKeyDisplay })
                  }
                >
                  <KeyboardIcon color="black" strokeWidth={1} />
                </Button>
              </div>
              <div className="flex">
                <Button>T</Button>
                <Button>
                  <ADSR strokeWidth={1} />
                </Button>
              </div>
            </div>

            <Display />
            <Knobs />
          </div>
          <div className="w-min flex flex-row align-middle justify-center bg-white border border-black border-b-0">
            {/* Create semi-tone keys */}
            {Object.keys(toneMap).map((tone) => {
              if (tone.length > 2) {
                return (
                  <Key
                    key={tone}
                    type="semiTone"
                    position={toneMap[tone].position}
                    tone={toneMap[tone]}
                    onMouseDown={handleKeyPlay}
                    onMouseUp={handleKeyStop}
                  />
                )
              }
            })}
          </div>
          <div className="w-min flex flex-row align-middle justify-center bg-white border border-black border-t-0">
            {/* Create full-tone keys */}
            {Object.keys(toneMap).map((tone) => {
              if (tone.length === 2) {
                return (
                  <Key
                    key={tone}
                    type="fullTone"
                    tone={toneMap[tone]}
                    onMouseDown={handleKeyPlay}
                    onMouseUp={handleKeyStop}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
