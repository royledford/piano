import {
  ReactElement,
  PropsWithChildren,
  useState,
  useMemo,
  DragEvent,
} from 'react'
import { clamp } from '@/lib/utils'

type KnobProps = {
  faceColor?: 'blue' | 'green' | 'orange' | 'white'
  className?: string
  style?: object
  onChange: (value: number) => void
}

export default function Knob({
  faceColor = 'white',
  onChange,
  className = '',
  style = {},
  children,
}: PropsWithChildren & KnobProps): ReactElement {
  const [startDrag, setStartDrag] = useState(0)
  const [knobRotation, setKnobRotation] = useState('rotate-[45deg]')

  const renderedFaceColor = useMemo(() => {
    if (faceColor === 'blue') return 'bg-[#475DFF]'
    if (faceColor === 'green') return 'bg-[#36DB47]'
    if (faceColor === 'orange') return 'bg-[#D54C2B]'
    return 'bg-[#D5D1D0]'
  }, [faceColor])

  const handleRotateKnob = (value: number) => {
    setKnobRotation(`rotate(${Math.floor(value * 360)}deg)`)
  }

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    if (e.clientY === 0) return // handles a case where mouse-up sets it to 0???
    const dragDistance = startDrag - e.clientY
    const value = clamp(dragDistance, -70, 70) // value based on UI knob height
    const reducedValue = (value / 140) * 2 // value converted to -1 to 1
    const actualValue = Number((reducedValue / 2 + 0.5).toFixed(2)) // convert to value between 0 and 1
    onChange(actualValue)
    handleRotateKnob(actualValue)
  }

  return (
    <div className="w-[140px] h-[140px] bg-slate-200 relative">
      {/* following is UI */}
      <div
        className={`${className} w-full h-full group border-2  border-black  p-0 flex rounded-none bg-black text-black`}
        style={style}
      >
        <div
          className={`hover:bg-[#c4c0be] bg-[#D5D1D0] p-[40px] overflow-hidden flex items-center justify-center  h-full w-full rounded-sm`}
        >
          <div className="rounded-full border border-black p-[20px]">
            <div
              className={`${renderedFaceColor}
          shadow-[-7px_-7px_12px_-1px_#fff,7px_7px_12px_#7D7777]
          group-active:shadow-[-3px_-3px_3px_#fff,3px_3px_3px_#7D7777]
          border-white
          border rounded-full flex justify-center items-center h-[42px] w-[42px]`}
            >
              <div
                style={{ transform: knobRotation }}
                className={`w-[16px] h-[8px] shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.6),inset_1px_1px_2px_rgba(0,0,0,0.6)]`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* following is drag element */}
      <div
        className="absolute w-full h-full top-0 left-0 opacity-0"
        onDrag={handleDrag}
        onDragStart={(e) => setStartDrag(e.clientY)}
        onDragEnd={(e) => setStartDrag(0)}
        draggable={true}
      ></div>
    </div>
  )
}
