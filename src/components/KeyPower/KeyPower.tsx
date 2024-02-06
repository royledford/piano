import { ReactElement, ReactNode } from 'react'
import { Button as ShadButton } from '@/components/ui/button'
import { Power } from 'lucide-react'

type AppProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  on?: boolean
  className?: string
  style?: {}
}

// Display a full sized key
export default function KeyPower({
  className = '',
  on = false,
  style = {},
  onClick,
}: AppProps): ReactElement {
  return (
    <ShadButton
      className={`${className} group border-2  border-black  p-0 flex max-w-[96px] min-w-[96px] h-[96px] rounded-none bg-black text-black`}
      style={style}
      onClick={onClick}>
      <div
        className={`hover:bg-[#c4c0be] bg-[#D5D1D0] overflow-hidden flex justify-center items-center p-[12px] h-full w-full rounded-sm`}>
        <div
          className={`bg-[#D5D1D0] shadow-[-7px_-7px_12px_-1px_#fff,7px_7px_12px_#7D7777] group-active:shadow-[-3px_-3px_3px_#fff,3px_3px_3px_#7D7777] border-white border  rounded-full flex justify-center items-center h-full w-full`}>
          <Power strokeWidth={3} color={on ? '#36DB47' : '#000'} />
        </div>
      </div>
    </ShadButton>
  )
}
