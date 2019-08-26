import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class ColorSelector extends Component {
     constructor (props) {
          super(props)
          this.state = {
               colorFro: 'hex',
          }
     }
     handleChange = (e) => {
          this.setState({colorFro: e.target.value})
          this.props.changeFormat(e.target.value);
     }
     
     render () {
          const {colorFro} = this.state
          return (
               <div>
                    <Select value={colorFro} onChange={this.handleChange}>
                         <MenuItem value='hex'>HEX : #ffffff</MenuItem>
                         <MenuItem value='rgb'>RGB : rgb(255,255,255)</MenuItem>
                         <MenuItem value='rgba'>GRBA : rgba(255,255,255,1)</MenuItem>
                    </Select>
               </div>
          )
     }
}
export default ColorSelector;