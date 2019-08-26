import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackbarCom from '../Snackbar/Snackbar'

import './ColorSelector.scss'

class ColorSelector extends Component {
     constructor (props) {
          super(props)
          this.state = {
               format: 'hex',
               open: false
          }
     }
     handleChange = (e) => {
          this.setState({ format: e.target.value,open: true})
          this.props.changeFormat(e.target.value);
     }
     handleCloseSnackbar = () => {
          this.setState({open: false})
     }
     render () {
          const { format} = this.state
          return (
               <div className="format-selector">
                    <Select value={format} onChange={this.handleChange}>
                         <MenuItem value='hex'>HEX : #ffffff</MenuItem>
                         <MenuItem value='rgb'>RGB : rgb(255,255,255)</MenuItem>
                         <MenuItem value='rgba'>GRBA : rgba(255,255,255,1)</MenuItem>
                    </Select>
                    <SnackbarCom open={this.state.open} handleClose={this.handleCloseSnackbar} format={format} />
               </div>
          )
     }
}
export default ColorSelector;