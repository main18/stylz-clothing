import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA47ND52-oksrsisVpqCw8NPuzdIosG0gY",
    authDomain: "styls-db.firebaseapp.com",
    databaseURL: "https://styls-db.firebaseio.com",
    projectId: "styls-db",
    storageBucket: "styls-db.appspot.com",
    messagingSenderId: "127724211224",
    appId: "1:127724211224:web:1b1a41773626b636b8876d",
    measurementId: "G-Y0B53HX0BE"
};

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionnalData) => {
    if(!userAuth) return;
    const userRef = store.doc(`/users/${userAuth.uid}`);
    const snapShot = userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionnalData,
            });
        } catch (error) {
            console.log('error creating the user', error);
        }

    }
    return userRef;
}

export const auth = firebase.auth();

export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);



















export default firebase;