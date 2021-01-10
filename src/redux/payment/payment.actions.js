import PaymentActionTypes from "./payment.types";

export const stripePaymentStart = (stripeData) => ({
    type  : PaymentActionTypes.STRIPE_PAYMENT_START,
    payload : stripeData
})

export const stripePaymentSuccess = () => ({
    type : PaymentActionTypes.STRIPE_PAYMENT_SUCCESS
})
export const stripePaymentFailure = (error) => ({
    type : PaymentActionTypes.STRIPE_PAYMENT_FAILURE,
    payload : error
})