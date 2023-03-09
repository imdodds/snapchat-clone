import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN15RW_SjvEhLPORv5-Ph1OSBqVHNAsV0",
  authDomain: "snapchat-clone-6d6a4.firebaseapp.com",
  projectId: "snapchat-clone-6d6a4",
  storageBucket: "snapchat-clone-6d6a4.appspot.com",
  messagingSenderId: "879130092851",
  appId: "1:879130092851:web:0a146e0674e04b1b210a46",
  measurementId: "G-1QP5MFWLVQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };