import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import PaletteList from '../../Component/PaletteList/PaletteList';
import './Home.scss';

const styles = {
	root: {
		display: 'flex',
		width: '100%',
		height: '100vh',
		background: 'blue',
		justifyContent: 'center',
		alingItmes: 'flex-start'
	},
	container: {
		width: '50%'
	},
	nav: {},
	list: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3,1fr)',
		gridAutoRows: '17rem',
		gridGap: '2rem'
	}
};

const Home = (props) => {
	const { palette, classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav} />
				<div className={classes.list}>
					{palette.map(({ id, ...others }) => <PaletteList key={id} {...others} />)}
				</div>
			</div>
		</div>
	);
};
export default withStyles(styles)(Home);

{
	/* <Link to={`/palette/${id}`}>
     {paletteName} <span>{emoji}</span>
</Link> */
}
