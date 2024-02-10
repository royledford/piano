import { useMemo } from 'react'
import {
  CircleDot,
  Keyboard,
  MessageCircleQuestion,
  Music2,
  Minus,
} from 'lucide-react'
import {
  AudioWaveformSine,
  AudioWaveformSquare,
  AudioWaveformTriangle,
  AudioWaveformSawtooth,
} from '@/components/Icons'
import { DisplayWave } from './DisplayWave'
import { useDevice } from '@/providers/device-provider'
import { useActx } from '@/providers/web-audio-provider'

import { PropsWithChildren, ReactElement } from 'react'
import { DisplayADSR } from './ADSR/DisplayADSR'

// Display for keyboard
export default function Display({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const { state } = useDevice()
  const [actx] = useActx()

  const oscDisplay = useMemo(() => {
    if (state.oscType === 'sine')
      return <AudioWaveformSine color="white" strokeWidth={1} />

    if (state.oscType === 'square')
      return <AudioWaveformSquare color="white" strokeWidth={1} />

    if (state.oscType === 'triangle')
      return <AudioWaveformTriangle color="white" strokeWidth={1} />

    return <AudioWaveformSawtooth color="white" strokeWidth={1} />
  }, [state.oscType])

  const keyDisplay = useMemo(() => {
    if (state.keyDisplay === 'none')
      return <Minus color="white" strokeWidth={1} />

    if (state.keyDisplay === 'note')
      return <Music2 color="white" strokeWidth={1} />

    return <Keyboard color="white" strokeWidth={1} />
  }, [state.keyDisplay])

  return (
    <div
      className={`${className ? className : ''} flex w-full h-[140px] bg-slate-950`}
    >
      <div className="flex flex-col h-full">
        <IconDisplay render={<CircleDot color={actx ? 'green' : 'red'} />} />
        <IconDisplay render={oscDisplay} />
        <IconDisplay render={keyDisplay} />
        <IconDisplay render={<MessageCircleQuestion color="white" />} />
      </div>
      {state.display === 'wave' ? <DisplayWave /> : <DisplayADSR />}
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
