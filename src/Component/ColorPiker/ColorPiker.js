import React from 'react'
import { ChromePicker  } from 'react-color';


import './ColorPiker.scss'

const colorPiker =  ({ color, handleChange,classes}) =>( 
     <ChromePicker
          color={color}
          onChangeComplete={handleChange }
     />
)

export default colorPiker;