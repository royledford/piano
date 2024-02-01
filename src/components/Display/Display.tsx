import { Children } from 'react'

type props = {
  children?: JSX.Element
}
// Display for keyboard
export default function Display({ children }: props) {
  return <div className="w-full h-32 bg-slate-950">{children && children}</div>
}
