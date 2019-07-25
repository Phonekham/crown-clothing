import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6d_E2fGO1octV-6m1ImrMOHhHoz5vp0g",
  authDomain: "crown-db-cc8b2.firebaseapp.com",
  databaseURL: "https://crown-db-cc8b2.firebaseio.com",
  projectId: "crown-db-cc8b2",
  storageBucket: "",
  messagingSenderId: "390837361361",
  appId: "1:390837361361:web:d3200c050a2e31e6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
