import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Slider.scss';

const slider = ({ colorShade, changeColorShade, lavel }) => (
	<div className="color-slider">
		<span className="color-slider__lavel-text">Lavel : {lavel}</span>
		<div className="color-slider__container">
			<Slider defaultValue={colorShade} min={100} max={900} step={100} onAfterChange={changeColorShade} />
		</div>
	</div>
);

export default slider;
