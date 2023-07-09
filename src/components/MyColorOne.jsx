import { BlockPicker  } from "react-color";

// eslint-disable-next-line react/prop-types
const MyColorOne = ({blockPickerColor, setBlockPickerColor }) => {

  return (
    <div>
      <div>
        <div className="blockpicker">
          <BlockPicker
            color={blockPickerColor}
            onChange={(color) => {
              setBlockPickerColor(color.hex);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyColorOne;
