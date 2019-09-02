import React from 'react';
import { Link } from 'react-router-dom';
import PaletteList from '../../Component/PaletteList/PaletteList';
import './Home.scss';


const Home = ({ palette, handleDeletePalette }) => (
	<div className='home-page'>
		<div className='home-page__container'>
			<nav>
				<h1>React Color Palette</h1>
				<Link to="/createpalette">Creact New Palette</Link>
			</nav>
			<div className='home-page__list'>
				{palette.map(({ id, ...others }) => <PaletteList 
					key={id} 
					{...others} 
					id={id} 
					handleDeletePalette={handleDeletePalette}
				/>)}
			</div>
		</div>
	</div>
);
export default Home;
