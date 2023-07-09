import { PhotoshopPicker } from 'react-color'

// eslint-disable-next-line react/prop-types
const ColorPhotoShop = ({blockPickerColor, setBlockPickerColor }) => {
  return (
    <div>
        <PhotoshopPicker color={blockPickerColor} onChange={(color) => {setBlockPickerColor(color.hex)}}/>
        <p>PhotoShop</p>
    </div>
  )
}

export default ColorPhotoShop