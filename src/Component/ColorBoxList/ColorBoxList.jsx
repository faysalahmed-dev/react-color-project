import React from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import DragableColorBox from '../DragableColorBox/DragableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import './ColorBoxList.scss';

const colorBoxList = ({ colors, removeBox }) => (
	<TransitionGroup className="colorbox-list" component='div'>
		{colors.map((color, index) => (
			<CSSTransition classNames='drag' timeout={300} key={color.id}>
				<DragableColorBox
					color={color.color}
					index={index}
					name={color.name}
					removeBox={removeBox}
				/>
			</CSSTransition>
			))}
	</TransitionGroup>
);
export default SortableContainer(colorBoxList);
