import React, { Component } from 'react'
import { Button } from '@material-ui/core';

import './Form.scss'

class Form extends Component {
     constructor (props) {
          super(props)
          this.state = {
               name: '',
               error: false,
               errorMes: ''
          }
     }
     handleChange  = (e) => {
          this.setState({name: e.target.value})
     }
     checkInputIsValid = (name,oldColor) => {
          const { colorList } = this.props
          const value = name.toLowerCase()
          if(value === ''){
               return{error: true, errorMes: 'box should have name'}
          }
          if(colorList.findIndex(({name}) => name.toLowerCase() === value) !== -1) {
             return { error: true, errorMes: 'box should have unic name' }
          }
          if(colorList.findIndex(({color}) => color === oldColor) !== -1){
               return { error: true, errorMes: 'color have must unic ' }
          }
          return { error: false};
     }
     handleSubmit = (e) => {
          e.preventDefault()
          const valid = this.checkInputIsValid(this.state.name,this.props.curColor)
          this.setState(valid,() => {
               if(!this.state.error){
                    this.props.addColor(this.state.name)
                    this.setState({ name: '', errorMes: '' })
               }
          })
         
     }
     render() {
          const {name, error,errorMes} = this.state;
          const {curColor} = this.props;
          return (
               <div>
                    <form onSubmit={this.handleSubmit}>
                         <div className="input-group">
                              <input className='input-group-text' type="text" onChange={this.handleChange} value={name } />
                              <div className="input-group-outline"></div>
                         </div>
                         {error && (<p style={{color: 'red'}}>{errorMes}</p>)}
                         <Button variant="contained" 
                              style={{ background: curColor }} 
                              type="submit">
                                   Add Color
                         </Button>
                    </form>
               </div>
          )
     }
}
export default Form;
