import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
		background: '#fff',
		borderRadius: '.3rem',
		cursor: 'pointer',
		paddingBottom: '0'
	},
	footer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.3rem',
		transform: 'translatey(2px)'
	},
	miniPalette: {
		display: 'grid',
		width: '100%',
		height: '100%',
		gridTemplateColumns: 'repeat(5,1fr)',
		gridAutoRows: '25%',
		borderRadius: '.3rem',
		overflow: 'hidden'
	}
};

const paletteList = ({ id, paletteName, emoji, colors, classes, history }) => {
     const handleClick = (id) => history.push(`/palette/${id}`);
     
	return (
		<div className={classes.root} onClick={() => handleClick(id)}>
			<div className={classes.miniPalette}>
				{colors.map((color) => (
					<div key={color.name} className={classes.minBox} style={{ background: color.color }} />
				))}
			</div>
			<div className={classes.footer}>
				<h2>{paletteName}</h2>
				<span>{emoji}</span>
			</div>
		</div>
	);
};
export default withRouter(withStyles(styles)(paletteList));
