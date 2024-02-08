import { ReactElement, PropsWithChildren, ReactEventHandler } from 'react'
import { Button as ShadButton } from '@/components/ui/button'

type ButtonProps = {
  onClick: ReactEventHandler<HTMLButtonElement>
  className: string
  style: object
}

// Display a full sized key
export default function Button({
  onClick,
  className = '',
  style = {},
  children,
}: PropsWithChildren & ButtonProps): ReactElement {
  return (
    <ShadButton
      className={`${className} w-[70px] h-[70px] group border-2  border-black  p-0 flex rounded-none bg-black text-black`}
      style={style}
      onClick={onClick}
    >
      <div
        className={`hover:bg-[#c4c0be] bg-[#D5D1D0] overflow-hidden flex items-center p-[12px] h-full w-full rounded-sm`}
      >
        <div
          className={`bg-[#D5D1D0]
          shadow-[-7px_-7px_12px_-1px_#fff,7px_7px_12px_#7D7777]
          group-active:shadow-[-3px_-3px_3px_#fff,3px_3px_3px_#7D7777]
          border-white
          border rounded-full flex justify-center items-center h-full w-[42px]`}
        >
          {children}
        </div>
      </div>
    </ShadButton>
  )
}
