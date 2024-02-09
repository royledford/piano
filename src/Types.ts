// export interface AppProps {
//   children?: React.ReactNode // best, accepts everything React can render
//   style?: React.CSSProperties // to pass through style props
//   onChange?: React.FormEventHandler<HTMLInputElement> // form events! the generic parameter is the type of event.target
// }

import { ReactNode } from 'react'

export type KeySemitonePosition = {
  position?: 'left' | 'center' | 'right' | undefined
}

export type ToneMapType = {
  note: string
  hertz: number
  keyboard: string
} & KeySemitonePosition

export type OnKeyHandler = (
  e: React.MouseEvent<HTMLButtonElement>,
  map: ToneMapType
) => void

export interface MusicKeyProps {
  highlight?: boolean
  tone: ToneMapType
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onMouseDown: OnKeyHandler
  onMouseUp: OnKeyHandler
  className?: string
  style?: {}
  children?: ReactNode | undefined
}

// Device Provider Types
export type DeviceOscType = 'sine' | 'square' | 'triangle' | 'sawtooth'
export type DeviceKeyDisplayType = 'none' | 'note' | 'key'
export type DeviceDisplayType = 'wave' | 'adsr'
export type DeviceState = {
  oscType: DeviceOscType
  toneUnisonWidth: number
  volume: number
  keyDisplay: DeviceKeyDisplayType
  display: DeviceDisplayType
  adsr: {
    attack: number
    decay: number
    sustain: number
    release: number
  }
}

export type DeviceActions =
  | { type: 'TOGGLE_OSC_TYPE' }
  | { type: 'TONE_UNISON_WIDTH'; payload: number }
  | { type: 'VOLUME'; payload: number }
  | { type: 'TOGGLE_KEY_DISPLAY' }
  | { type: 'TOGGLE_DEVICE_DISPLAY' }

export enum DeviceActionTypes {
  ToggleOscType = 'TOGGLE_OSC_TYPE',
  ToneUnisonWidth = 'TONE_UNISON_WIDTH',
  Volume = 'VOLUME',
  ToggleKeyDisplay = 'TOGGLE_KEY_DISPLAY',
  ToggleDeviceDisplay = 'TOGGLE_DEVICE_DISPLAY',
}
