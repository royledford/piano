import {
  DeviceState,
  DeviceActions,
  DeviceActionTypes,
  DeviceOscType,
} from '@/Types'

export const deviceInitState: DeviceState = {
  oscType: 'sine',
  toneUnisonWidth: 10,
  volume: 0.5,
}

// This provides a simple way to toggle to the next
// available osc type based on the current osc type
const oscTypeToggleMap: Record<DeviceOscType, DeviceOscType> = {
  sine: 'square',
  square: 'triangle',
  triangle: 'sawtooth',
  sawtooth: 'sine',
}

export function deviceReducer(
  state: DeviceState,
  action: DeviceActions
): DeviceState {
  switch (action.type) {
    case DeviceActionTypes.ToggleOscType:
      return {
        ...state,
        // Need to implement the toggle
        oscType: oscTypeToggleMap[state.oscType],
      }

    case DeviceActionTypes.ToneUnisonWidth: {
      return {
        ...state,
        toneUnisonWidth: action.payload,
      }
    }
    case DeviceActionTypes.Volume: {
      return {
        ...state,
        volume: action.payload,
      }
    }
    default:
      throw new Error(
        `Unhandled Action: ACTION ${action.type} is not a valid action for Device Reducer`
      )
  }
}
