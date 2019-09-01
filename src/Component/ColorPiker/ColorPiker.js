import React from 'react'
import { ChromePicker  } from 'react-color';
import {withStyles} from '@material-ui/styles'



const styles = {
     main : {
          
     }
}

const colorPiker =  ({ color, handleChange,classes}) =>( 
     <ChromePicker
          color={color}
          onChangeComplete={handleChange }
          className={classes.main}
     />
)

export default withStyles(styles)(colorPiker)