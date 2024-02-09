import { Slider } from './slider'
import { useDevice } from '@/providers/device-provider'

export function DisplayADSR() {
  const { state } = useDevice()

  return (
    <div className="p-4 flex flex-col justify-center items-center space-y-4 h-full w-full text-white">
      <Slider label="Attack" color="blue" value={state.adsr.attack} />
      <Slider label="Decay" color="green" value={state.adsr.decay} />
      <Slider label="Sustain" color="white" value={state.adsr.sustain} />
      <Slider label="Release" color="orange" value={state.adsr.release} />
    </div>
  )
}
