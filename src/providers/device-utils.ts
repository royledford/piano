import { DeviceState, DeviceActions, DeviceActionTypes } from '@/Types'

export const deviceInitState: DeviceState = {
  oscType: 'sine',
  toneUnisonWidth: 10,
  volume: 0.5,
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
        oscType: state.oscType,
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
