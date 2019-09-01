import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import Form from '../../Component/Form/Form';



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
               <div>
                    <CssBaseline />
                    <AppBar
                         color="default"
                         position="fixed"
                         className={clsx(classes.appBar, {
                              [classes.appBarShift]: open
                         })}
                    >
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
                              <Typography variant="h5" noWrap>
                                   Persistent drawer
						</Typography>

                              <Form colorList={colorList} 
                                   handleSave={handleSave} 
                                   type="app" 
                                   rule='Save'
                              />

                              <Button variant="contained"
                                   color="primary"
                                   onClick={this.handleGoBack}
                              >Go Back</Button>
                         </Toolbar>
                    </AppBar>
               </div>
          )
     }
}
export default withRouter(CreactpaletteNavBar);