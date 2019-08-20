import React from 'react';
import './ColorBox.scss';

const ColorBox = ({ name, background }) => {
	return (
		<div
			className="color-box"
			style={{
				background
			}}
		>

			<div className="color-box__content">
				<span className="color-box__name">{name}</span>
				<button className="color-box__button">copy</button>
				<span className="color-box__more-btn">More</span>
			</div>
		</div>
	);
};
export default ColorBox;
