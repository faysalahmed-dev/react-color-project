import React from 'react'
import Slider from '../Slider/Slider'
import "./Header.scss"


const Header = ({ colorShade, changeColorShade, lavel}) => {
     return (
          <header className="header">
               <div className="header__logo">
                    <a href="#">React Color Piker</a>
               </div>
               <div className="header__lavel">
                    <span className="header__lavel-text">Lavel : {lavel}</span>
                    <div className="header__slider-container">
                         <Slider colorShade={colorShade} changeColorShade={changeColorShade} />
                    </div>
               </div>
          </header>
     )
}
export default Header;