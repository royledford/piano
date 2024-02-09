import {
  DeviceState,
  DeviceActions,
  DeviceActionTypes,
  DeviceOscType,
  DeviceKeyDisplayType,
} from '@/Types'

export const deviceInitState: DeviceState = {
  oscType: 'sine',
  toneUnisonWidth: 10,
  volume: 0.5,
  keyDisplay: 'none',
  display: 'wave',
}

// Provide a simple way to handle toggling through multiple
// states for specific items
const oscTypeToggleMap: Record<DeviceOscType, DeviceOscType> = {
  sine: 'square',
  square: 'triangle',
  triangle: 'sawtooth',
  sawtooth: 'sine',
}

const keyDisplayToggleMap: Record<DeviceKeyDisplayType, DeviceKeyDisplayType> =
  {
    none: 'note',
    note: 'key',
    key: 'none',
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
    case DeviceActionTypes.ToggleKeyDisplay: {
      return {
        ...state,
        keyDisplay: keyDisplayToggleMap[state.keyDisplay],
      }
    }
    case DeviceActionTypes.SetDisplay: {
      return {
        ...state,
        display: action.payload,
      }
    }
    default:
      throw new Error(
        `Unhandled Action: ACTION ${action.type} is not a valid action for Device Reducer`
      )
  }
}
