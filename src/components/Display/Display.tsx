import {
  CircleDot,
  AudioWaveform,
  Keyboard,
  MessageCircleQuestion,
} from 'lucide-react'
import { AudioWaveformSawtooth } from '@/components/Icons'

import { PropsWithChildren, ReactElement } from 'react'

// Display for keyboard
export default function Display({
  className,
  children,
}: PropsWithChildren<{ className: string }>) {
  return (
    <div
      className={`${className ? className : ''} w-full h-[140px] bg-slate-950`}
    >
      <div className="flex flex-col h-full">
        <IconDisplay render={<CircleDot color="red" />} />
        <IconDisplay
          render={<AudioWaveformSawtooth color="white" strokeWidth={1} />}
        />
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
