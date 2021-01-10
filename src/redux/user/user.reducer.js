import UserActionTypes from "./user.types"

const INITIAL_STATE = {
    currentUser: null,
    error : null,
    hidden: true,
    showUserInformtion:false,
    showResetPassword:false,
    showOrderHistory:false
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
        case UserActionTypes.UPDATE_ADDRESS_SUCCESS:
        case UserActionTypes.GET_ORDER_HISTORY :
            return {
                ...state,
                currentUser: action.payload,
                error : null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS : 
            return {
                ...state,
                currentUser : null,
                error : null
            };
        case UserActionTypes.SIGN_IN_FAILURE : 
        case UserActionTypes.SIGN_OUT_FAILURE : 
        case UserActionTypes.SIGN_UP_FAILURE :
        case UserActionTypes.UPDATE_ADDRESS_FAILURE:
            return{
                ...state,
                error : action.payload
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