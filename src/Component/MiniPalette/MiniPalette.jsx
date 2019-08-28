import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	main: {
		background: 'red',
		color: '#fff',
		fontSize: '20px'
	}
};
const miniPalette = (props) => {
	const { classes } = props;
	return <div className={classes.main}>some text</div>;
};

export default withStyles(styles)(miniPalette);
