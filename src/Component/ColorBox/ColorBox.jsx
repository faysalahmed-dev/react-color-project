import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withRouter } from 'react-router-dom';
import './ColorBox.scss';
class ColorBox extends Component {
	state = {
		isCopied: false
	};
	handleClick = () => {
		this.setState({ isCopied: true }, () => {
			setTimeout(() => {
				this.setState({ isCopied: false });
			}, 1200);
		});
	};
	handleMore = (e) => {
		const { history, location, id } = this.props;
		e.stopPropagation();
		history.push(`${location.pathname}/${id}`);
	};
	render() {
		const { name, background } = this.props;
		console.log(this.props);
		const { isCopied } = this.state;
		return (
			<CopyToClipboard text={background} onCopy={this.handleClick}>
				<div className="color-box" style={{ background }}>
					<div
						className={`color-box__overlay ${isCopied && 'color-box__overlay_show'}`}
						style={{ background }}
					/>

					<div className={`color-box__copied-mas ${this.state.isCopied && 'color-box__copied-mas_show'}`}>
						<h1>Copied !</h1>
						<p>{background}</p>
					</div>

					<div className="color-box__content">
						<span className="color-box__name">{name}</span>
						<button className="color-box__button">copy</button>
						{this.props.link && (
							<span className="color-box__more-btn" onClick={this.handleMore}>
								More
							</span>
						)}
					</div>
				</div>
			</CopyToClipboard>
		);
	}
}
export default withRouter(ColorBox);
