import { GithubPicker } from "react-color";

// eslint-disable-next-line react/prop-types
const ColorGithub = ({ blockPickerColor, setBlockPickerColor }) => {
  return (
    <div>
      <GithubPicker
        color={blockPickerColor}
        onChange={(color) => setBlockPickerColor(color.hex)}
      />
      <p>GitHub</p>
    </div>
  );
};

export default ColorGithub;
