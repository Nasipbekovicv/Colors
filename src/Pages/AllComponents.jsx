import { useState } from "react";
import ColorGithub from "../components/ColorGithub";
import { ColorCircle } from "../components/ColorCircle";
import ColorPhotoShop from "../components/ColorPhotoShop";
import MyColorOne from "../components/MyColorOne";
import SketchColor from "../components/SketchColor";
import ColorSwatches from "../components/ColorSwatches";
import ColorSlider from "../components/ColorSlider";
import ColorCompact from "../components/ColorCompact";
import { Container } from "react-bootstrap";
import '../style/AllComponents.css'

const AllComponents = () => {
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  return (
    <Container>
      <div>
        <div
          className="content-title"
          style={{
            backgroundColor: `${blockPickerColor}`, height: '180px'
          }}
        >
          <h1 className="title-h1">React Colors</h1>
          <p className="title-p">Коллекция палитр цветов из Sketch, Photoshop, Chrome, Github, Twitter, Material Design и многого другого</p>
        </div>
        <div className="colors">
          <div className="block-1-colors"> 
          <div>   
          <ColorGithub
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
          <ColorCircle
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
            <div className="block-color-slider">
          <ColorSlider
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
            </div>
          </div>   

          <ColorPhotoShop
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
          </div>
          <div className="block-2-colors">   
          <div>   
          <MyColorOne
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
          <ColorCompact
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
          </div>
          <SketchColor
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
          <ColorSwatches
            blockPickerColor={blockPickerColor}
            setBlockPickerColor={setBlockPickerColor}
          />
          </div>
          <div className="block-3-colors">
          
          
          </div>


        </div>
      </div>
    </Container>
  );
};

export default AllComponents;
