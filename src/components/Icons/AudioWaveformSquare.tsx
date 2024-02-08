import { IconWrapper, IconProps } from './IconWrapper'

export const AudioWaveformSquare = ({
  iconName,
  color = 'black',
  strokeWidth = 2,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper iconName="AudioWaveformSquare" {...rest}>
      <path
        d="M1 13H4V7.5H8V16.5H12V7.5H15.8185L16 16.5H20V13H23"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </IconWrapper>
  )
}
