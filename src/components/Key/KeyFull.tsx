import { ReactElement, ReactNode, useMemo } from 'react'
import { Button as ShadButton } from '@/components/ui/button'
import { MusicKeyProps } from '@/Types'

// Display a full sized key
export default function KeyFull({
  onClick,
  keyMap,
  onMouseDown,
  onMouseUp,
  className = '',
  highlight = false,
  style = {},
  children,
}: MusicKeyProps): ReactElement {
  const styles = {
    normal: {
      bgColor: 'bg-[#D5D1D0]',
      dropShadow: 'shadow-[-7px_-7px_12px_-1px_#fff,7px_7px_12px_#7D7777]',
      border: 'border-white',
      hover: 'hover:bg-[#c4c0be]',
      pressed: 'group-active:shadow-[-3px_-3px_3px_#fff,3px_3px_3px_#7D7777]',
    },
    highlight: {
      bgColor: 'bg-[#D54C2B]',
      dropShadow: 'shadow-[-7px_-7px_12px_-1px_#f55731,7px_7px_12px_#b54125]',
      border: 'border-[#d1725a]',
      hover: 'hover:bg-[#c24527]',
      pressed:
        'group-active:shadow-[-3px_-3px_3px_#f55731,3px_3px_3px_#b54125]',
    },
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseDown(e, keyMap)
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseUp(e, keyMap)
  }

  const selectedColor = highlight ? styles.highlight : styles.normal

  const display = useMemo(() => keyMap.keyboard, [])

  return (
    <ShadButton
      className={`${className} group border-2  border-black  p-0 flex w-[70px] h-[145px] rounded-none bg-black text-black`}
      style={style}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <div
        className={`${selectedColor.hover} ${selectedColor.bgColor} overflow-hidden flex justify-center items-center p-[12px] h-full w-full rounded-sm`}>
        <div
          className={`${selectedColor.bgColor} ${selectedColor.dropShadow} ${selectedColor.pressed} ${selectedColor.border} border  rounded-full flex justify-center items-center h-full w-full`}>
          {display}
        </div>
      </div>
    </ShadButton>
  )
}
