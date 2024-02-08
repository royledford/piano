import type { HTMLAttributes, PropsWithChildren } from 'react'

interface Props {
  iconName: string
  color?: string
  size?: number
  strokeWidth?: number
  className?: string
  rotate?: number
}

export type IconProps = PropsWithChildren & Props

export const IconWrapper = ({
  iconName,
  color = 'black',
  size = 24,
  strokeWidth = 2,
  className,
  rotate,
  children,
  ...rest
}: IconProps) => {
  return (
    <div
      className={className}
      aria-label={iconName}
      role="img"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </div>
  )
}
