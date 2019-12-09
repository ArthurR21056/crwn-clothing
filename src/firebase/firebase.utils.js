import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnsFBXfz8_ik3XsKkO7Oo5rHYRPh6LuFk",
    authDomain: "crwn-db-bbe4f.firebaseapp.com",
    databaseURL: "https://crwn-db-bbe4f.firebaseio.com",
    projectId: "crwn-db-bbe4f",
    storageBucket: "crwn-db-bbe4f.appspot.com",
    messagingSenderId: "50748627134",
    appId: "1:50748627134:web:209144d856abcfc41d66ef",
    measurementId: "G-ZDVGY0PHF0"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;