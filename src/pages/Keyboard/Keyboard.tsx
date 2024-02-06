import { useState, KeyboardEvent } from 'react'
import Display from '@/components/Display/Display'
import KeyPower from '@/components/KeyPower/KeyPower'
import Key from '@/components/Key/Key'
import { keyMap } from '@/lib/utils'
import { OnKeyHandler, KeyMapType } from '@/Types'
import { useActx } from '@/providers/WebAudioProvider/webAudioProvider'

export default function Keyboard() {
  const [actx, play, stop] = useActx()
  const [pressedKeys, setPressedKeys] = useState<string[]>([])
  console.log('pressedKeys', pressedKeys) // TODO: remove this

  const isPressed = (note: string) => {
    return pressedKeys.includes(note)
  }

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
    const map = Object.keys(keyMap).filter(
      (key) => keyMap[key].keyboard === e.key,
    )

    const key = keyMap[map[0]]
    if (key) {
      play(key)
    }
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    const map = Object.keys(keyMap).filter(
      (key) => keyMap[key].keyboard === e.key,
    )

    stop(keyMap[map[0]])
  }

  return (
    <div
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={-1}
      className="flex items-center justify-center h-screen">
      <div className="p-6 rounded-lg flex items-center justify-center bg-[#D5D1D0]">
        <div className="w-min">
          <div className="flex justify-center items-center border border-black border-b-0">
            <KeyPower on={Boolean(actx)} onClick={() => {}} />
            <Display />
          </div>
          <div className="w-min flex flex-row align-middle justify-center bg-white border border-black border-b-0">
            <Key
              type="semiTone"
              position="left"
              keyMap={keyMap['Gb3']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="center"
              keyMap={keyMap['Ab3']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="right"
              keyMap={keyMap['Bb3']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="left"
              keyMap={keyMap['Db4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="right"
              keyMap={keyMap['Eb4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="left"
              keyMap={keyMap['Gb4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="center"
              keyMap={keyMap['Ab4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="right"
              keyMap={keyMap['Bb4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />

            <Key
              type="semiTone"
              position="left"
              keyMap={keyMap['Db5']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="semiTone"
              position="right"
              keyMap={keyMap['Eb5']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
          </div>
          <div className="w-min flex flex-row align-middle justify-center bg-white border border-black border-t-0">
            <Key
              type="fullTone"
              keyMap={keyMap['F3']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['G3']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['A3']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['B3']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['C4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['D4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['E4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['F4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['G4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['A4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['B4']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['C5']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              type="fullTone"
              keyMap={keyMap['D5']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
            <Key
              highlight
              type="fullTone"
              keyMap={keyMap['E5']}
              onMouseDown={handleKeyPlay}
              onMouseUp={handleKeyStop}
              keyDown={isPressed('F3')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
