import { SketchPicker } from "react-color"

// eslint-disable-next-line react/prop-types
const SketchColor = ({blockPickerColor, setBlockPickerColor}) => {

  return (
    <div>
         <SketchPicker color={blockPickerColor} onChangeComplete={(color) => {
            setBlockPickerColor(color.hex)
          }} />
          <p>Sketch</p>
    </div>
  )
}

export default SketchColor