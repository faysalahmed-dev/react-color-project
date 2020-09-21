import React from 'react';
import { Link } from 'react-router-dom';
import PaletteList from '../../Component/PaletteList/PaletteList';
import { ReactComponent as Github } from '../../img/github.svg';
import './Home.scss';

const Home = ({ palette, handleDeletePalette }) => (
    <div className='home-page'>
        <div className='home-page__container'>
            <nav>
                <h1>ColorsHints</h1>
                <Link to='/createpalette'>Creact New Palette</Link>
            </nav>
            <div className='home-page__list'>
                {palette.map(({ id, ...others }) => (
                    <PaletteList
                        key={id}
                        {...others}
                        id={id}
                        handleDeletePalette={handleDeletePalette}
                    />
                ))}
            </div>
            <footer className='home-page__footer'>
                Material color palette build by{' '}
                <a href='https://www.github.com/faysal146'>Faysal Ahmed</a> and
                project source code
                <a
                    href='https://www.github.com/faysal146/react-color-project'
                    className='github-icon'
                >
                    <Github />
                </a>
            </footer>
        </div>
    </div>
);
export default Home;
