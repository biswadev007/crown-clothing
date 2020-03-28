import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config= {
    apiKey: "AIzaSyCcmSU4QugyCYauZ_JkctLsweDANsSm1GQ",
    authDomain: "crown-clothing-backend-2b03e.firebaseapp.com",
    databaseURL: "https://crown-clothing-backend-2b03e.firebaseio.com",
    projectId: "crown-clothing-backend-2b03e",
    storageBucket: "crown-clothing-backend-2b03e.appspot.com",
    messagingSenderId: "924249637622",
    appId: "1:924249637622:web:64f9a5f6bc57b7fda6e2d7",
    measurementId: "G-F0BKYB2LBX"
  };
  
  export const createProfileData = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapData = await userRef.get();

    if(!snapData.exists){
      const { displayName,email,phoneNumber,photoURL } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          photoURL,
          phoneNumber,
          ...additionalData
        })
      } catch (err) {
        console.log('Error:',err.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;