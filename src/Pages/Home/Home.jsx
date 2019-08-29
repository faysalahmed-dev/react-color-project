import React from 'react';
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
	list: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3,1fr)',
		gridAutoRows: '17rem',
		gridGap: '2rem'
	}
};

const Home = ({ palette, classes } ) =>(
		<div className={classes.root}>
			<div className={classes.container}>
				<nav/>
				<div className={classes.list}>
					{palette.map(({id,...others }) => <PaletteList key={id} {...others} id={id} />)}
				</div>
			</div>
		</div>
	);
export default withStyles(styles)(Home);
