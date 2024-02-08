import { IconWrapper, IconProps } from './IconWrapper'

export const AudioWaveformTriangle = ({
  iconName,
  color = 'black',
  strokeWidth = 2,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper iconName="AudioWaveformTriangle" {...rest}>
      <path
        d="M1 13H4L6 6L10 18L13.9093 6L18 18L20 13H23"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </IconWrapper>
  )
}
