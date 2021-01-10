import {all, call, put, takeLatest, select} from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import {clearCart} from "./cart.actions";
import {getOrderHistory} from "../user/user.actions";

import {selectCartItems} from "./cart.selectors";
import {selectCurrentUser} from"../user/user.selector";

import PaymentActionTypes from "../payment/payment.types";
// import {stripePaymentStart} from "../payment/payment.actions";

import {addCartItemsToOrderDetails} from "../../firebase/firebase.utils";



export function* clearCartOnSignOutOrCheckout(){
    yield put(clearCart());
}

export function* checkout(){
    const cart = yield select(selectCartItems);
    const currentUser = yield select(selectCurrentUser);

    let userRef = yield call(addCartItemsToOrderDetails, currentUser, cart);
    const userSnapshot = yield userRef.get();

    yield put(getOrderHistory({id : userSnapshot.id, ...userSnapshot.data()}));
    yield clearCartOnSignOutOrCheckout()
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutOrCheckout)
}

export function* onPaymentSuccess(){
    yield takeLatest(PaymentActionTypes.STRIPE_PAYMENT_SUCCESS, checkout);
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess),
        call(onPaymentSuccess)
    ])
}