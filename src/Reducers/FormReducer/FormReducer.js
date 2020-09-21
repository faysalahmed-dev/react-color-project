import * as actionType from '../../Action/ActionType';


const formReducer = (state,action) => {
     // eslint-disable-next-line default-case
     switch (action.type) {
          case actionType.FROM_INVALID :
               return {error: true,errorMeg : action.errorMeg}
          case actionType.FORM_SUBMIT : 
               return {error: false, errorMeg : ''}
          default : return state
     }
}
export default formReducer;