import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';

import './Form.scss';

class Form extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			error: false,
			errorMes: '', 
		};
	}
	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};
	checkInputIsValid = (name, oldColor, type) => {
		const { colorList } = this.props;
		const value = name.toLowerCase();
		if (value === '') {
			return {
				error: true,
				errorMes: `Enter the ${type === 'dr' ? 'Color' : 'Palette'} Name`
			};
		}
		if (type === 'dr') {
			if (colorList.findIndex(({ name }) => name.toLowerCase() === value) !== -1) {
				return { error: true, errorMes: 'This Name is already taken' };
			}
               if (colorList.findIndex(({ color }) => color === oldColor) !== -1) {
                    return {
                         error: true, errorMes: 'This Color is already taken'};
			}
		} else {
			if (colorList.findIndex(({ paletteName }) => paletteName.toLowerCase() === value) !== -1) {
				return {
					error: true,
					errorMes: 'This Palette Name is already taken'
				};
			}
		}
		return { error: false };
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const valid = this.checkInputIsValid(this.state.name, this.props.curColor, this.props.type);
		this.setState(valid, () => {
			if (!this.state.error) {
				if (this.props.type === 'dr') {
					this.props.addColor(this.state.name);
					this.setState({ name: '', errorMes: '' });
				} else {
					this.props.handleSave(this.state.name);
					this.setState({ name: '', errorMes: '' });
				}
			}
		});
	};
	render() {
		const { name, error, errorMes } = this.state;
		
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<TextField id="standard-name" 
						value={name} 
						onChange={this.handleChange} 
						margin="normal" 
						fullWidth 
					/>
					{error && <p className='error'>{errorMes}</p>}
					{this.props.children}
				</form>
			</div>
		);
	}
}
export default Form;
