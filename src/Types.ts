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
export type DeviceState = {
  oscType: 'sine' | 'square' | 'triangle' | 'sawtooth'
  toneUnisonWidth: number
  volume: number
}
