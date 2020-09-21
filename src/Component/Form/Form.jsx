import React, { useReducer } from 'react';
import { formInvalid, formSumbit } from '../../Action/FormAction/FormAction';
import formReducer from '../../Reducers/FormReducer/FormReducer';
import TextField from '@material-ui/core/TextField';
import useInput from '../../Hooks/FormHook/FormHook';
import validForm from '../../Gobal/ValidForm/ValidForm';
import './Form.scss';

const initialState = { error: false, errorMeg: '' };

const Form = (props) => {
    const [name, handleChange, reset] = useInput('');
    const [state, dispatch] = useReducer(formReducer, initialState);
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = validForm(name, props.colorList);
        if (value) {
            dispatch(formInvalid(value));
        } else {
            dispatch(formSumbit());
            // if (props.dir === 'palette') {
            //     props.handleNewPalette(name);
            // } else {
            //     props.handleSave(name);
            // }
            props.handleSave(name);
            reset();
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='standard-name'
                    value={name}
                    onChange={handleChange}
                    margin='normal'
                    fullWidth
                />
                {state.error && <p className='error'>{state.errorMeg}</p>}
                {props.children}
            </form>
        </div>
    );
};
export default Form;
