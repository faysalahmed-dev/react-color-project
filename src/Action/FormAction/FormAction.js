import * as actionType from '../ActionType'

export const formInvalid = (errorMeg) => ({
     type: actionType.FROM_INVALID,
     errorMeg
})

export const formSumbit = () => ({
     type: actionType.FORM_SUBMIT,
})