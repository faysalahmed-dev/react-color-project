import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import ColorSelector from '../ColorFormateSelector/ColorSelector';
import './Header.scss';

const Header = ({ colorShade, changeColorShade, lavel, changeFormat }) => {
	return (
		<header className="header">
			<div className="header__logo">
				<Link to="/">React Color Piker</Link>
			</div>
			<div className="header__lavel">
				<span className="header__lavel-text">Lavel : {lavel}</span>
				<div className="header__slider-container">
					<Slider colorShade={colorShade} changeColorShade={changeColorShade} />
				</div>
			</div>
			<ColorSelector changeFormat={changeFormat} />
		</header>
	);
};
export default Header;
