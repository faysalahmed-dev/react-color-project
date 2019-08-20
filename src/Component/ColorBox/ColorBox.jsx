import React from 'react';
import './ColorBox.scss';

const ColorBox = ({ name, color }) => {
	return (
		<div
			className="color-box"
			style={{
				background: color
			}}
		>
			<span className="color-box__name">{name}</span>
			<span className="color-box__more-btn">More</span>
		</div>
	);
};
export default ColorBox;
