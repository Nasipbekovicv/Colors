import { CompactPicker } from "react-color"

// eslint-disable-next-line react/prop-types
const ColorCompact = ({blockPickerColor, setBlockPickerColor }) => {
  return (
    <div>
        <CompactPicker color={blockPickerColor} onChange={color => {
            setBlockPickerColor(color.hex)
        }}/>
        <p>Compact</p>
    </div>
  )
}

export default ColorCompact