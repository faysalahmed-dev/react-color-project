import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Slider.scss'

const slider = ({ colorShade, changeColorShade}) =>( 
          <Slider
               defaultValue={colorShade}
               min={100}
               max={900}
               step={100}
               onAfterChange={changeColorShade}
     />)

export default slider;