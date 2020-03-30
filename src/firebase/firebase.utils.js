import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "crwn-db-16e9a.firebaseapp.com",
    databaseURL: "https://crwn-db-16e9a.firebaseio.com",
    projectId: "crwn-db-16e9a",
    storageBucket: "crwn-db-16e9a.appspot.com",
    messagingSenderId: "303347186948",
    appId: "1:303347186948:web:4bf854eacd8dea8436e451"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase