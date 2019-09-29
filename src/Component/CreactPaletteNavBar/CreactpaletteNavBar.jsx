import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import NavBarForm from '../NavBarForm/NavBarForm';

import './NavBar.scss';
const drawerWidth = 300;

const styles = (theme) => ({
     appBar: {
          transition: theme.transitions.create(['margin', 'width'], {
               easing: theme.transitions.easing.sharp,
               duration: theme.transitions.duration.leavingScreen
          }),
          paddingRight: '2rem'
     },
     appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(['margin', 'width'], {
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
     appBarLayout : {
          display: 'flex',
          justifyContent: 'space-between'
     }
});


class CreactpaletteNavBar extends Component {
     handleGoBack = () => {
          this.props.history.push('/')
     }
     render() {
          const { 
               classes, 
               handleDrawerOpen, 
               colorList, 
               handleSave, 
               open 
          } = this.props;
          return (
               <div className="navbar__container">
                    <CssBaseline />
                    <AppBar
                         color="default"
                         position="fixed"
                         className={clsx(classes.appBar, {
                              [classes.appBarShift]: open
                         })}
                    >
                         <div className={classes.appBarLayout}>
                              <Toolbar>
                                   <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        edge="start"
                                        className={clsx(classes.menuButton, open && classes.hide)}
                                   >
                                        <MenuIcon />
                                   </IconButton>
                                        <Typography variant="h4" noWrap>
                                             Create New Palette
                                        </Typography>
                              </Toolbar>
                              <div className="button-group">
                                   <Button variant="contained"
                                        color="primary"
                                        onClick={this.handleGoBack}
                                   >Go Back</Button>
                                   <NavBarForm colorList={colorList}
                                        handleSave={handleSave} />
                              </div>
                         </div>
                    </AppBar>
               </div>
          )
     }
}
export default withRouter(withStyles(styles)(CreactpaletteNavBar));