import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
		background: '#fff',
		borderRadius: '.3rem',
		cursor: 'pointer',
		paddingBottom: '0',
		position: 'relative',
		overflow: 'hidden',
		"&:hover #delete" : {
			opacity: '1'
		}
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
	delete: {
		position: 'absolute',
		top:'0',
		right: '0',
		padding: '.5rem .7rem',
		background: '#f6b906',
		opacity: '0',
		transition: 'all .4s',
		'&:hover svg': {
			transform:'scale(1.1)'
		},
		'&:active svg': {
			transform: 'scale(.9)'
		}
	},
	deleteIcon : {
		fontSize: '2rem',
		color: '#fff',
	}
	
};

const paletteList = (props) => {
	const { id,
			paletteName,
			emoji,
			colors,
			classes,
			history,
			handleDeletePalette } = props

	const handleClick = (id) => history.push(`/palette/${id}`);
	
	const handleDelete = (e) => {
		e.stopPropagation()
		handleDeletePalette(id)
	}
	return (
		<div className={classes.root} onClick={() => handleClick(id)}>
			<div className={classes.delete} id="delete" onClick={handleDelete}>
				<DeleteOutlinedIcon className={classes.deleteIcon}/>
			</div>
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
