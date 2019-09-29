import React from 'react';
import ColorBox from '../../Component/ColorBox/ColorBox';

import './MainColor.scss';

const mainColorSection = (props) => {
	const { colors, format, link,styles } = props
	return (
		<div className="main-color-section" style={styles} >
			{colors.map((color) => (
				<ColorBox name={color.name} background={color[format]} key={color.name} id={color.id} link={link} />
			))}
			{props.children}
		</div>
	);
};
export default mainColorSection;
