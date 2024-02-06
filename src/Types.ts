// export interface AppProps {
//   children?: React.ReactNode // best, accepts everything React can render
//   style?: React.CSSProperties // to pass through style props
//   onChange?: React.FormEventHandler<HTMLInputElement> // form events! the generic parameter is the type of event.target
// }

import { ReactNode } from 'react'

export type KeySemitonePosition = {
  position?: 'left' | 'center' | 'right' | undefined
}

export type KeyMapType = {
  note: string
  hertz: number
  keyboard: string
} & KeySemitonePosition

export type OnKeyHandler = (
  e: React.MouseEvent<HTMLButtonElement>,
  map: KeyMapType,
) => void

export interface MusicKeyProps {
  highlight?: boolean
  keyMap: KeyMapType
  keyDown: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  onMouseDown: OnKeyHandler
  onMouseUp: OnKeyHandler
  className?: string
  style?: {}
  children?: ReactNode | undefined
}
