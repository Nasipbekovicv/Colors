import { SliderPicker } from "react-color"

// eslint-disable-next-line react/prop-types
const ColorSlider = ({blockPickerColor, setBlockPickerColor }) => {
  return (
    <div>
        <SliderPicker styles={{width: '100px' , height: '50px'}} color={blockPickerColor} onChange={(color) => {
            setBlockPickerColor(color.hex)
        }} />
        <p>Slider</p>
    </div>
  )
}

export default ColorSlider