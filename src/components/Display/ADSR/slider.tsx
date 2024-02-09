import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type Colors = 'blue' | 'green' | 'white' | 'orange'
type SliderProps = {
  label: string
  color: Colors
  value: number
}

type BaseSliderProps = {
  color: Colors
  value: number
}

const Slider = ({ label, value, color }: SliderProps) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <Label className="w-[100px]">{label}</Label>
      <BaseSlider color={color} value={value} />
    </div>
  )
}

const BaseSlider = ({ value, color, ...props }: BaseSliderProps) => {
  const classes = {
    blue: {
      track: 'bg-blue-900',
      thumb: 'bg-blue-400',
      range: 'bg-blue-500',
    },
    green: {
      track: 'bg-green-900',
      thumb: 'bg-green-400',
      range: 'bg-green-500',
    },
    white: {
      track: 'bg-slate-900',
      thumb: 'bg-slate-400',
      range: 'bg-slate-500',
    },
    orange: {
      track: 'bg-orange-900',
      thumb: 'bg-orange-400',
      range: 'bg-orange-500',
    },
  }

  const colors = classes[color]

  return (
    <SliderPrimitive.Root
      className={cn('relative flex w-full touch-none select-none items-center')}
      value={[value]}
      min={0}
      max={1}
      step={0.1}
      {...props}
    >
      <SliderPrimitive.Track
        className={`relative h-2 w-full grow overflow-hidden rounded-full ${colors.track}`}
      >
        <SliderPrimitive.Range className={`absolute h-full ${colors.range}`} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={`block h-5 w-5 rounded-full border-2 border-primary ${colors.range} ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
      />
    </SliderPrimitive.Root>
  )
}
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
