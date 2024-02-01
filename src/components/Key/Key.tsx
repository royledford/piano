import { ReactElement, ReactNode } from 'react'
// import styles from './Button.module.css'
import { Button as ShadButton } from '@/components/ui/button'

type AppProps = {
  onClick?: () => void
  className?: string
  style?: {}
  children?: ReactNode
}

// Display a calculator button
export default function Button({
  className = '',
  style = {},
  onClick,
  children,
}: AppProps): ReactElement {
  return (
    <ShadButton
      className={`${className} border-2  border-black  p-0 flex w-[70px] h-[145px] rounded-none bg-black`}
      style={style}
      onClick={onClick}>
      <div className="overflow-hidden flex justify-center items-center p-[12px] h-full w-full rounded-sm bg-[#D5D1D0]">
        <div className="bg-[#D5D1D0] drop-shadow-up rounded-full flex justify-center items-center h-full w-full ">
          {children}
        </div>
      </div>
    </ShadButton>
  )
}
