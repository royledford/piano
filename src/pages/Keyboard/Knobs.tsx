import Knob from '@components/Knob/Knob'
import { useDevice } from '@/providers/device-provider'
import { DeviceActionTypes } from '@/Types'

export function Knobs() {
  const { state, dispatch } = useDevice()

  return (
    <div className="flex justify-center content-center">
      <Knob
        faceColor="blue"
        onChange={(val) => {
          dispatch({ type: DeviceActionTypes.SetAttack, payload: val })
        }}
      />
      <Knob
        faceColor="green"
        onChange={(val) => {
          dispatch({ type: DeviceActionTypes.SetDecay, payload: val })
        }}
      />
      <Knob
        faceColor="white"
        onChange={(val) => {
          dispatch({ type: DeviceActionTypes.SetSustain, payload: val })
        }}
      />
      <Knob
        faceColor="orange"
        onChange={(val) => {
          dispatch({ type: DeviceActionTypes.SetRelease, payload: val })
        }}
      />
    </div>
  )
}
