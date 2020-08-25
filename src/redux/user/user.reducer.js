import {UserActionTypes} from "./user.types"

const INITIAL_STATE = {
    currentUser: null,
    hidden: true,
    showUserInformtion:false,
    showResetPassword:false,
    showOrderHistory:false
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN : 
            return{
                ...state,
                hidden : !state.hidden
            };
        case UserActionTypes.USER_DROPDOWN_CLICKED_OUTSIDE : 
            return {
                ...state,
                hidden : true
            }
        case UserActionTypes.SHOW_USER_INFORMATION :
            return{
                ...state,
                showUserInformtion:true,
                showResetPassword:false,
                showOrderHistory:false
            } 
        case UserActionTypes.SHOW_RESET_PASSWORD : 
            return{
                ...state,
                showUserInformtion:false,
                showResetPassword:true,
                showOrderHistory:false
            } 
        case UserActionTypes.SHOW_ORDER_HISTORY : 
            return{
                ...state,
                showUserInformtion:false,
                showResetPassword:false,
                showOrderHistory:true
            } 
        default : 
            return state;
    }
}

export default userReducer;