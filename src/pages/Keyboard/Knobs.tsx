import Knob from '@components/Knob/Knob'

export function Knobs() {
  return (
    <div className="flex justify-center content-center">
      <Knob
        faceColor="blue"
        onChange={(val) => {
          // console.log(val)
        }}
      />
      <Knob
        faceColor="green"
        onChange={(val) => {
          // console.log(val)
        }}
      />
      <Knob
        faceColor="white"
        onChange={(val) => {
          // console.log(val)
        }}
      />
      <Knob
        faceColor="orange"
        onChange={(val) => {
          // console.log(val)
        }}
      />
    </div>
  )
}
