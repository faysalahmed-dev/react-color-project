import React from 'react'
import { ChromePicker  } from 'react-color';

export default ({ color, handleChange}) =>( 
     <ChromePicker
          color={color}
          onChangeComplete={handleChange }
     />
)