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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists)
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }
        catch(error){
            console.log('error creating user', error.message);

        }
    }
    return userRef;
}

export const addCartItemsToOrderDetails = async (currentUser, cartItems) => {
    const userRef = firestore.doc(`users/${currentUser.id}`);
    let data = cartItems.map(item => ({item, date : new Date().toUTCString()}));

    await userRef.update({
        orderHistory : firebase.firestore.FieldValue.arrayUnion(...data)
    })

    return userRef;
}


export const updateUserAddress = (currentUser, addressData) => {
    const userRef = firestore.doc(`users/${currentUser.id}`)

    userRef.update({
        address : addressData
    })
    .then(()=>{
        console.log("address updated")
        // currentUser.address = addressData;
    })
    .catch(error =>{
        console.log('error updating address', error.message);
    })
    return userRef;
}

export const addCollectionAndDocuments = async  (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject)=> {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;