import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';

import Form from '../../Component/Form/Form';

import ColorPiker from '../../Component/ColorPiker/ColorPiker';
import ColorBoxList from '../../Component/ColorBoxList/ColorBoxList';
import { purple } from '@material-ui/core/colors';

const drawerWidth = 300;
const topBar = '64px';

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		height: `calc(100vh - ${topBar})`,
		// padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
});

class CreateNewPalette extends React.Component {
	state = {
		open: false,
		name: 'purple',
		curColor: 'purple',
		colorList: [ { name: 'teal', color: 'teal' }, { name: 'red', color: 'red' }, { name: 'black', color: 'black' } ]
	};
	handleDrawerOpen = () => this.setState({ open: true });

	handleDrawerClose = () => this.setState({ open: false });

	handleChange = (newColor) => this.setState({ curColor: newColor.hex });

	handleAddColor = (name) => {
		this.setState({ name }, () => {
			this.setState({ colorList: [ ...this.state.colorList, { name: name, color: this.state.curColor } ] });
		});
	};
	handleSave = () => {
		const paletteName = 'new test color paltte';
		const id = paletteName.toLowerCase().replace(/\s/g, '-');
		const palette = {
			paletteName,
			id,
			colors: this.state.colorList
		};
		this.props.handleSave(palette);
		this.props.history.push('/');
	};
	render() {
		const { classes } = this.props;
		const { open, curColor, colorList } = this.state;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this.handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5" noWrap>
							Persistent drawer
						</Typography>
						<Button variant="contained" color="secondary" onClick={this.handleSave}>
							Save
						</Button>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{withStyles.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</div>
					<Typography variant="h5" noWrap>
						Create Your Own Palette
					</Typography>
					<div>
						<Button variant="contained" color="secondary">
							Clear Palette
						</Button>
						<Button variant="contained" color="primary">
							Random Color
						</Button>
					</div>
					<ColorPiker color={curColor} handleChange={this.handleChange} />

					<Form curColor={curColor} colorList={colorList} addColor={this.handleAddColor} />
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<ColorBoxList colors={this.state.colorList} />
				</main>
			</div>
		);
	}
}
export default withRouter(withStyles(styles)(CreateNewPalette));
