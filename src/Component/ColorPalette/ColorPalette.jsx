import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

import './ColorPalette.scss';

class ColorPalette extends Component {
	render() {
		return (
			<div className="palette">
				{/* nav bar is here */}

				<div className="palette__colors">
					{this.props.colors.map(({ name, color }, idx) => <ColorBox name={name} background={color} key={idx} />)}
				</div>

				{/* footer here */}
			</div>
		);
	}
}

export default ColorPalette;
