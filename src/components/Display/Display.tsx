import { useMemo } from 'react'
import {
  CircleDot,
  AudioWaveform,
  Keyboard,
  MessageCircleQuestion,
} from 'lucide-react'
import {
  AudioWaveformSine,
  AudioWaveformSquare,
  AudioWaveformTriangle,
  AudioWaveformSawtooth,
} from '@/components/Icons'
import { useDevice } from '@/providers/device-provider'

import { PropsWithChildren, ReactElement } from 'react'

// Display for keyboard
export default function Display({
  className,
  children,
}: PropsWithChildren<{ className: string }>) {
  const { state } = useDevice()

  const oscDisplay = useMemo(() => {
    if (state.oscType === 'sine')
      return <AudioWaveformSine color="white" strokeWidth={1} />

    if (state.oscType === 'square')
      return <AudioWaveformSquare color="white" strokeWidth={1} />

    if (state.oscType === 'triangle')
      return <AudioWaveformTriangle color="white" strokeWidth={1} />

    return <AudioWaveformSawtooth color="white" strokeWidth={1} />
  }, [state.oscType])

  return (
    <div
      className={`${className ? className : ''} w-full h-[140px] bg-slate-950`}
    >
      <div className="flex flex-col h-full">
        <IconDisplay render={<CircleDot color="red" />} />
        <IconDisplay render={oscDisplay} />
        <IconDisplay render={<Keyboard color="white" />} />
        <IconDisplay render={<MessageCircleQuestion color="white" />} />
      </div>
    </div>
  )
}

function IconDisplay({ render }: { render: ReactElement }) {
  return (
    <div className="w-[35px] h-[35px] flex justify-center items-center p-2">
      {render}
    </div>
  )
}
