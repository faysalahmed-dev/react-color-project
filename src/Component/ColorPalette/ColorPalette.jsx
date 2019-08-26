import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Header from '../Header/Header';

import './ColorPalette.scss';

class ColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorShade: 800
		};
	}
	changeColorShade = (colorShade) => {
		this.setState({ colorShade });
	};
	render() {
		const { colors } = this.props.palette;
		const { colorShade } = this.state;
		return (
			<div className="palette">
				<Header colorShade={colorShade} changeColorShade={this.changeColorShade} lavel={colorShade}/>
				<div className="palette__colors">
					{colors[colorShade].map(({ name, hex }, idx) => (
						<ColorBox name={name} background={hex} key={idx} />
					))}
				</div>

				{/* footer here */}
			</div>
		);
	}
}

export default ColorPalette;
