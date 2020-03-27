import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB3Y52g15QK5FSdZtU4B__Cg4-EXZjF_kU",
    authDomain: "crwn-gaming-f0d51.firebaseapp.com",
    databaseURL: "https://crwn-gaming-f0d51.firebaseio.com",
    projectId: "crwn-gaming-f0d51",
    storageBucket: "crwn-gaming-f0d51.appspot.com",
    messagingSenderId: "206036962309",
    appId: "1:206036962309:web:25856325fdc6e491cb606c"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
