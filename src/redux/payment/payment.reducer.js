import PaymentActionTypes from "./payment.types";

const INITIAL_STATE = {
    error : null
}

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PaymentActionTypes.STRIPE_PAYMENT_FAILURE : 
            return {
                ...state,
                error : action.payload
            }
        case PaymentActionTypes.STRIPE_PAYMENT_SUCCESS:
            return {
                ...state,
                error : null
            }
        default : 
            return {
                ...state
            }
    }
}

export default paymentReducer;