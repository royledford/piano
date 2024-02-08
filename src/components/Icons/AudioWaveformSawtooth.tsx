import { IconWrapper, IconProps } from './IconWrapper'

export const AudioWaveformSawtooth = ({
  iconName,
  color = 'black',
  strokeWidth = 2,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper iconName="AudioWaveformSawtooth" {...rest}>
      <path
        d="M1 13H4L8 6V18L15.9093 6L16.5 18L20 13H23"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </IconWrapper>
  )
}
