import React, { Component } from 'react';
import Slider from 'rc-slider';

import ColorBox from '../ColorBox/ColorBox';

import 'rc-slider/assets/index.css';
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
				<Slider
					defaultValue={colorShade}
					min={100}
					max={900}
					step={100}
					onAfterChange={this.changeColorShade}
				/>
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
