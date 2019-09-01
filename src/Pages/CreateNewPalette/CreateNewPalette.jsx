import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import {arrayMove} from 'react-sortable-hoc';
import Form from '../../Component/Form/Form';
import ColorPiker from '../../Component/ColorPiker/ColorPiker';
import ColorBoxList from '../../Component/ColorBoxList/ColorBoxList';

import NavBar from '../../Component/CreactPaletteNavBar/CreactpaletteNavBar'

import './CreactNewPalette.scss'

const drawerWidth = 300;
const topBar = '64px';

const styles = (theme) => ({
	root: {
		display: 'flex'
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
	},
	some : {
		boxShadow: 'none'
	}
});

class CreateNewPalette extends React.Component {
	static defaultProps = {
		maxColorBoxLength : 20
	}
	state = {
		open: true,
		name: '',
		curColor: '',
		colorList: [{ name: "red", color: "#F44336" },
			{ name: "pink", color: "#E91E63" },
			{ name: "purple", color: "#9C27B0" },
			{ name: "deeppurple", color: "#673AB7" },
			{ name: "indigo", color: "#3F51B5" },
			{ name: "blue", color: "#2196F3" },
			{ name: "lightblue", color: "#03A9F4" },
			{ name: "cyan", color: "#00BCD4" },
			{ name: "teal", color: "#009688" },
			{ name: "green", color: "#4CAF50" },
			{ name: "lightgreen", color: "#8BC34A" },
			]
	};
	handleDrawerOpen = () => this.setState({ open: true });

	handleDrawerClose = () => this.setState({ open: false });

	handleChange = (newColor) => this.setState({ curColor: newColor.hex });

	handleAddColor = (name) => {
		this.setState({ name }, () => {
			this.setState({ colorList: [ ...this.state.colorList, { name: name, color: this.state.curColor } ] });
		});
	};
	handleRemove = (boxName) => {
		this.setState({
			colorList: this.state.colorList.filter(color => color.name !== boxName)
		})
	}
	handleSave = (paletteName) => {
		const palette = {
			paletteName,
			id: paletteName.toLowerCase().replace(/\s/g, '-'),
			colors: this.state.colorList
		};
		this.props.handleSave(palette);
		this.props.history.push('/');
	};
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colorList }) => ({
			colorList: arrayMove(colorList, oldIndex, newIndex),
		}));
	};
	clearPalette = () => {
		this.setState({colorList : []})
	}
	randomColor = () => {
		const colorArry = this.props.paletteList.map(pl => pl.colors).flat()
		const rNum = Math.floor(Math.random() * colorArry.length)
		this.setState({colorList :[ ...this.state.colorList,colorArry[rNum]]})
	}
	render() {
		const { paletteList, classes, maxColorBoxLength } = this.props;
		const { open, curColor, colorList } = this.state;
		const isFull =colorList.length >= maxColorBoxLength
		return (
			<div className={classes.root}>
				<NavBar handleDrawerOpen={this.handleDrawerOpen} 
					colorList={paletteList} 
					open={open}
					handleSave={this.handleSave}/>

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
					<div className="drawer__content">
						<div style={{marginTop: '-10rem'}}>
						<Typography variant="h4" noWrap align="center" className="drawer__heading">
							Create Your Own Palette
						</Typography>
						<div className="drawer__button">
							<Button variant="contained" 
								color="secondary" 
								onClick={this.clearPalette} 
								>
								Clear Palette
							</Button>
							<Button variant="contained" 
								color="primary" 
								onClick={this.randomColor}
								disabled={isFull}
							>
								Random Color
							</Button>
						</div>
						<ColorPiker color={curColor} handleChange={this.handleChange} />

						<Form curColor={curColor} 
							colorList={colorList} 
							addColor={this.handleAddColor} 
							type="dr" 
							disabled={isFull}
						>
							<Button variant="contained" 
								style={{ background: curColor }} color="secondary" 
								type="submit" 
								disabled={isFull}
								fullWidth
							>
								Add Color
							</Button> 
						</Form>
						</div>
					</div>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<ColorBoxList colors={this.state.colorList} removeBox={this.handleRemove} axis="xy" onSortEnd={this.onSortEnd}/>
				</main>
			</div>
		);
	}
}
export default withRouter(withStyles(styles)(CreateNewPalette));
