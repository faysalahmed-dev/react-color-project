import React from 'react';
import DragableColorBox from '../DragableColorBox/DragableColorBox';
import './ColorBoxList.scss';

const colorBoxList = ({ colors,removeBox }) => (
     <div className='colorbox-list'>
          {colors.map(color => <DragableColorBox color={color.color} name={color.name} key={color.name} removeBox={removeBox}/>)}
     </div>
);
export default colorBoxList;
