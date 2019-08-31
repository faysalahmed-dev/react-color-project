import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import './DragableColor.scss'


const dragableColorBox = ({ color, name,removeBox}) => {
	return (
		<div style={{ backgroundColor: color }} className="dragable-color-box">
			<div>
				<span className="name">{name}</span>
                    <span onClick={() => removeBox(name)}>{<DeleteOutlinedIcon className="delete-btn"/>}</span>
			</div>
		</div>
	);
};
export default dragableColorBox;
