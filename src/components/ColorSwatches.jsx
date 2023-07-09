import { SwatchesPicker } from "react-color"

// eslint-disable-next-line react/prop-types
const ColorSwatches = ({blockPickerColor, setBlockPickerColor }) => {
  return (
    <div>
        <SwatchesPicker color={blockPickerColor} onChange={color => {
            setBlockPickerColor(color.hex)
        }}/>
        <p>Swatches</p>
    </div>
  )
}

export default ColorSwatches