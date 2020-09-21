import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../Component/Slider/Slider';
import ColorSelector from '../../Component/ColorFormateSelector/ColorSelector';
import './Header.scss';

const Header = ({
    colorShade,
    changeColorShade,
    lavel,
    changeFormat,
    showSlider,
}) => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <Link to='/'>React Color Piker</Link>
            </div>
            <div className='header__tools'>
                {showSlider && (
                    <Slider
                        colorShade={colorShade}
                        changeColorShade={changeColorShade}
                        lavel={lavel}
                    />
                )}
                <ColorSelector changeFormat={changeFormat} />
            </div>
        </header>
    );
};
export default Header;
