import React from 'react';
import DragableColorBox from '../DragableColorBox/DragableColorBox';
import './ColorBoxList.scss';

const colorBoxList = ({ colors }) => (
     <div className='colorbox-list'>
          {colors.map((color,idx) => <DragableColorBox color={color.color} name={color.name} key={idx}/>)}
     </div>
);
export default colorBoxList;
