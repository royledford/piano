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
        d="M1 13H4V5H8V19H12V5H15.8185L16 19H20V13H23"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </IconWrapper>
  )
}
