import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom'
import Header from '../../Layout/Header/Header';
import MainColorSection from '../../Layout/MainColorSection/MainColorSection';
import Footer from '../../Layout/Fotter/Fotter';

const styles = {
	root: {
		overflow: 'hidden'
	}
};

class SinglePalette extends Component {
	constructor(props) {
		super(props);
		this.shade = this.generateShade(this.props.palette.colors, this.props.id);
		this.state = {
			format: 'hex'
		};
	}
	generateShade = (palette, id) => {
		let shade = [];
		for (let key in palette) {
			shade = shade.concat(palette[key].filter((color) => color.id === id));
		}
		return shade.slice(1);
	};
	changeFormat = (value) => {
		this.setState({ format: value });
	};
	handleGoBack = () => this.props.history.goBack()
	
	render() {
		const { paletteName, emoji } = this.props.palette;
		const { format } = this.state;
		return (
			<div className={this.props.classes.root}>
				<Header showSlider={false} changeFormat={this.changeFormat} />
				<MainColorSection colors={this.shade} format={format} link={false}>
					<div className="go-back">
						<button onClick={this.handleGoBack}>
							Go Back
						</button>
					</div>
				</MainColorSection>
				<Footer name={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withRouter(withStyles(styles)(SinglePalette));
