import React from 'react';
import './Fotter.scss';
const fotter = ({ name, emoji }) => (
	<div className="fotter">
		<p>{name} {emoji}</p>
	</div>
);
export default fotter;
