import React from 'react';
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
	},
	minBox: {}
};

const paletteList = ({ paletteName, emoji, colors, classes }) => {
	return (
		<div className={classes.root}>
			<div className={classes.miniPalette}>
				{colors.map(({ color }) => <div className={classes.minBox} style={{ background: color }} />)}
			</div>
			<div className={classes.footer}>
				<h2>{paletteName}</h2>
				<span>{emoji}</span>
			</div>
		</div>
	);
};
export default withStyles(styles)(paletteList);
