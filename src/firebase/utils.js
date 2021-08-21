import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}



export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const handleUserProfile = async ({ userAuth, additionalData }) => {
    if (!userAuth) return;

    const { uid } = userAuth;
    const userRef = firestore.doc(`users/${uid}`);

    const snapshot = await userRef.get();

    // console.log(snapshot);


    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const timeStamps = new Date();
        const userRoles = ['user'];

        try {
            await userRef.set({
                displayName,
                email,
                createdAt: timeStamps,
                userRoles: userRoles,
                ...additionalData
            });
        } catch (err) {
            console.log(err);
        }
    }
    return userRef;
};


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unSubscribe = auth.onAuthStateChanged(userAuth => {
            unSubscribe();
            resolve(userAuth);
        }, reject);
    })
}
