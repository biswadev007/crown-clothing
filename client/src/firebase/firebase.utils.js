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

  export const addCollectionAndDocument = async(collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.map(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    }); 

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
      return{
        routerName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items  
      }
    });
    return transformedCollection.reduce((accumulator, collection)=> {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject)=> {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    })
  }

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;