import { Children } from 'react'

type props = {
  className?: string
  children?: JSX.Element
}
// Display for keyboard
export default function Display({ className, children }: props) {
  return (
    <div className={`${className && className} w-full h-[96px] bg-slate-950`}>
      {children && children}
    </div>
  )
}
