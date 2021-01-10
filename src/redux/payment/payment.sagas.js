import {takeLatest, put, all, call } from "redux-saga/effects";

import axios from 'axios';

import PaymentActionTypes from "./payment.types";
import {stripePaymentFailure, stripePaymentSuccess} from "./payment.actions";


export function* stripePayment(stripeData){
    try{
        yield axios({
            url: 'http://serene-depths-70449.herokuapp.com/payment',
            method: 'post',
            data: {...stripeData.payload}
        })
        yield put(stripePaymentSuccess())
        alert("Payment Successful")
    }catch(error){
        yield put(stripePaymentFailure(error))
        alert("Error in Payment")
    }
}
export function* onStripePaymentStart(){
    yield takeLatest(PaymentActionTypes.STRIPE_PAYMENT_START, stripePayment)
}
export function* paymentSagas(){
    yield all([
        call(onStripePaymentStart)
    ])
}