import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Button} from '@material-ui/core'


import ColorPiker from '../../Component/ColorPiker/ColorPiker'

const drawerWidth = 300;

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
		padding: theme.spacing(3),
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
          curColor : 'purple',
          colorList : ['teal','purple','tomato','black']
	};
	handleDrawerOpen = () => this.setState({ open: true });

     handleDrawerClose = () => this.setState({ open: false });
     
     handleChange = (newColor) => {
          this.setState({curColor: newColor.hex})
     }
     handleAddColor = () => {
          this.setState({
               colorList : [...this.state.colorList,this.state.curColor]
          })
     }
	render() {
		const { classes } = this.props;
		const { open, curColor } = this.state;
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
					     <Typography variant="h2" noWrap>
						     Persistent drawer
					     </Typography>
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
                         <Typography variant="h3" noWrap>
                              Create Your Own Palette
					</Typography>
                         <div>
                              <Button variant="contained" color="secondary">Clear Palette</Button>
                              <Button variant="contained" color="primary">Random Color</Button>
                         </div>
                         <ColorPiker color={curColor} handleChange={this.handleChange}/>
                         <Button variant="contained" style={{background: curColor}} onClick={this.handleAddColor}>Add Color</Button>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
                         <ul>
                              {this.state.colorList.map(color => (<li style={{backgroundColor: color}}>{color}</li>) )}
                         </ul>
				</main>
			</div>
		);
	}
}
export default withStyles(styles)(CreateNewPalette);
