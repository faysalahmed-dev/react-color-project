import React from 'react'
import {withStyles}  from '@material-ui/styles'

const styles = {
     miniPalette: {
          display: 'grid',
          width: '100%',
          height: '100%',
          gridTemplateColumns: 'repeat(5,1fr)',
          gridAutoRows: '25%',
          borderRadius: '.3rem',
          overflow: 'hidden'
     }
};

const dragableColorBox = ({ color,name,classes}) => {
     return (
          <div style={{backgroundColor: color}}>
               {name}
          </div>
     )
}
export default withStyles(styles)(dragableColorBox);