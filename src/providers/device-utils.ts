import {
  DeviceState,
  DeviceActions,
  DeviceActionTypes,
  DeviceOscType,
  DeviceKeyDisplayType,
  DeviceDisplayType,
} from '@/Types'

export const deviceInitState: DeviceState = {
  oscType: 'sine',
  toneUnisonWidth: 10,
  volume: 0.5,
  keyDisplay: 'none',
  display: 'adsr',
  adsr: {
    attack: 0.2,
    decay: 0.2,
    sustain: 0.7,
    release: 0.6,
  },
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

const displayToggleMap: Record<DeviceDisplayType, DeviceDisplayType> = {
  wave: 'adsr',
  adsr: 'wave',
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

    case DeviceActionTypes.ToggleDeviceDisplay: {
      return {
        ...state,
        display: displayToggleMap[state.display],
      }
    }

    case DeviceActionTypes.SetAttack: {
      return {
        ...state,
        adsr: {
          ...state.adsr,
          attack: action.payload,
        },
      }
    }

    case DeviceActionTypes.SetDecay: {
      return {
        ...state,
        adsr: {
          ...state.adsr,
          decay: action.payload,
        },
      }
    }

    case DeviceActionTypes.SetSustain: {
      return {
        ...state,
        adsr: {
          ...state.adsr,
          sustain: action.payload,
        },
      }
    }

    case DeviceActionTypes.SetRelease: {
      return {
        ...state,
        adsr: {
          ...state.adsr,
          release: action.payload,
        },
      }
    }

    default:
      throw new Error(
        `Unhandled Action: ACTION ${action.type} is not a valid action for Device Reducer`
      )
  }
}
