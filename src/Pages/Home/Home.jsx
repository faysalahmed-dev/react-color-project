import React from 'react';
import { Link } from 'react-router-dom';

import MiniPalette from '../../Component/MiniPalette/MiniPalette';

const Home = ({ palette }) => {
	return (
		<div>
			<MiniPalette />
			{palette.map(({ paletteName, id }) => (
				<div key={id}>
					<Link to={`/palette/${id}`}>{paletteName}</Link>
				</div>
			))}
		</div>
	);
};
export default Home;
