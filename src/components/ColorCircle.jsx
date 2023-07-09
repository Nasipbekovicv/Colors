import { CirclePicker } from "react-color"

// eslint-disable-next-line react/prop-types
export const ColorCircle = ({blockPickerColor, setBlockPickerColor }) => {
  return (
    <div>
        <CirclePicker color={blockPickerColor} onChange={(color) => {
            setBlockPickerColor(color.hex)
        }} />
        <p>Circle</p>
    </div>
  )
}
