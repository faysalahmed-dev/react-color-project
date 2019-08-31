import React, { Component } from 'react';
import Header from '../../Layout/Header/Header';
import MainColorSection from '../../Layout/MainColorSection/MainColorSection';
import Fotter from '../../Layout/Fotter/Fotter';

import './ColorPalette.scss';

class ColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorShade: 500,
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
					showSlider
				/>
				<MainColorSection colors={colors[colorShade]} format={format} link rows={25}/>
				<Fotter name={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default ColorPalette;
