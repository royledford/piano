import { CircleDot } from 'lucide-react'
import { PropsWithChildren } from 'react'

// Display for keyboard
export default function Display({
  className,
  children,
}: PropsWithChildren<{ className: string }>) {
  return (
    <div
      className={`${className ? className : ''} w-full h-[140px] bg-slate-950`}
    >
      <div className="flex flex-col h-full">
        <div className="border-sky-200 border-2 w-[35px] h-[35px] flex justify-center items-center">
          <CircleDot color="red" />
        </div>
        <div className="border-sky-200 border-2 w-[35px] h-[35px]"></div>
        <div className="border-sky-200 border-2 w-[35px] h-[35px]"></div>
        <div className="border-sky-200 border-2 w-[35px] h-[35px]"></div>
      </div>
    </div>
  )
}

function IconDisplay({ children }: PropsWithChildren) {
  return (
    <div className="border-sky-200 border-2 w-[35px] h-[35px] flex justify-center items-center">
      <CircleDot color="red" />
    </div>
  )
}
