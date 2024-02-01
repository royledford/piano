export interface AppProps {
  children?: React.ReactNode // best, accepts everything React can render
  style?: React.CSSProperties // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement> // form events! the generic parameter is the type of event.target
}
