import {takeLatest, put, all, call, select } from "redux-saga/effects"

import UserActionTypes from "./user.types"
import {updateAddressSuccess,updateAddressFailure,
    signInSuccess, signInFailure, 
    signOutSuccess, signOutFailure,
    signUpSuccess, signUpFailure} from "./user.actions";

import {selectCartItems} from "../cart/cart.selectors";
import {selectCurrentUser} from"./user.selector";

import {auth, googleProvider, createUserProfileDocument, getCurrentUser, updateUserAddress, addCartItemsToCartDetails} from "../../firebase/firebase.utils"


export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({id : userSnapShot.id, ...userSnapShot.data()}));
    }catch(error){
        yield put(signInFailure(error));

    }

}
export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error));

    }
}

export function* signInWithEmail({payload : {email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error){
        put(signInFailure(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)

}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated()
{
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* signUp({payload : {email, password, displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData : {displayName}}));
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload : {user, additionalData}})
{
    yield getSnapshotFromUserAuth(user, additionalData);
}
export function* signOut(){
    try{
        const cart = yield select(selectCartItems);
        const currentUser = yield select(selectCurrentUser);

        yield auth.signOut();

        //* Adds cart items to the database
        if(cart.length !== 0){
            yield call(addCartItemsToCartDetails, currentUser, cart);
        }
        

        yield put(signOutSuccess())
    }catch(error)
    {
        yield put(signOutFailure(error))
    }
}

export function* updateAddress({payload : {currentUser, address}}){
    try{
        const userRef = yield call(updateUserAddress, currentUser, address);
        const userSnapShot = yield userRef.get();
        yield put(updateAddressSuccess({id : userSnapShot.id, ...userSnapShot.data()}));
        // yield call(updateUserAddress, currentUser, address);
        // currentUser.address = address;
        // yield put(updateAddressSuccess(currentUser))


    }catch(error){
        yield put(updateAddressFailure(error));
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)

}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)

}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onUpdateAddressStart(){
    yield takeLatest(UserActionTypes.UPDATE_ADDRESS_START, updateAddress)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onCheckUserSession),
            call(onSignOutStart),
            call(onSignUpStart),
            call(onSignUpSuccess),
            call(onUpdateAddressStart)
    ]);
}