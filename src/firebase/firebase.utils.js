import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWB96aPA2NGmOA6yrHZYr-xMlIGx10I6E",
    authDomain: "iskull-e-commerce-store-db.firebaseapp.com",
    databaseURL: "https://iskull-e-commerce-store-db.firebaseio.com",
    projectId: "iskull-e-commerce-store-db",
    storageBucket: "iskull-e-commerce-store-db.appspot.com",
    messagingSenderId: "826787576919",
    appId: "1:826787576919:web:73064b13383ce31f857712",
    measurementId: "G-L5FWPNT607"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;