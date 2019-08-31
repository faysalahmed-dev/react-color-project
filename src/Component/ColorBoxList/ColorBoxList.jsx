import React from 'react';
import DragableColorBox from '../DragableColorBox/DragableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import './ColorBoxList.scss';

const colorBoxList = ({ colors, removeBox }) => (
	<div className="colorbox-list">
		{colors.map((color, index) => (
			<DragableColorBox
				color={color.color}
				index={index}
				name={color.name}
				key={color.name}
                    removeBox={removeBox}
                    
			/>
		))}
	</div>
);
export default SortableContainer(colorBoxList);
