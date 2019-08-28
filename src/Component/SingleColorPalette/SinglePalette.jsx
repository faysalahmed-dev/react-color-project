import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

class SinglePalette extends Component {
	constructor(props) {
		super(props);
		this.shade = this.generateShade(this.props.palette.colors, this.props.id);
	}
	generateShade = (palette, id) => {
		let shade = [];
		for (let key in palette) {
			shade = shade.concat(palette[key].filter((color) => color.id === id));
		}
		return shade.slice(1);
	};

	render() {
		return (
			<div>
				<h1>some text</h1>
				<div className="palette__colors">
					{this.shade.map((color) => (
						<ColorBox
							name={color.name}
							background={color.hex}
							key={color.id}
							id={color.id}
							key={color.name}
							link={false}
						/>
					))}
				</div>
			</div>
		);
	}
}
export default SinglePalette;
