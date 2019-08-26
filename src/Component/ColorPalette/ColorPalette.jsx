import React, { Component } from 'react';
import Header from '../Header/Header';
import ColorBox from '../ColorBox/ColorBox';
import Fotter from '../../Layout/Fotter';

import './ColorPalette.scss';

class ColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorShade: 800,
			format: 'hex'
		};
	}
	changeFormat = (value) => {
		this.setState({ format: value });
	};

	changeColorShade = (colorShade) => {
		this.setState({ colorShade });
	};
	render() {
		const { colors, paletteName, emoji } = this.props.palette;
		const { colorShade, format } = this.state;
		return (
			<div className="palette">
				<Header
					colorShade={colorShade}
					changeColorShade={this.changeColorShade}
					lavel={colorShade}
					changeFormat={this.changeFormat}
				/>
				<div className="palette__colors">
					{colors[colorShade].map((color, idx) => (
						<ColorBox name={color.name} background={color[format]} key={idx} />
					))}
				</div>
				<Fotter name={paletteName} emoji={emoji}/>
			</div>
		);
	}
}

export default ColorPalette;
