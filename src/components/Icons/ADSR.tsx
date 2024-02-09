import { IconWrapper, IconProps } from './IconWrapper'

export const ADSR = ({
  iconName,
  color = 'black',
  strokeWidth = 2,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper iconName="AudioWaveformTriangle" {...rest}>
      <path
        d="M1 16.5L7 6L8.5 11C8.5 11 14.5 11 16.5 11C20.5 17 23 16.5 23 16.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </IconWrapper>
  )
}
