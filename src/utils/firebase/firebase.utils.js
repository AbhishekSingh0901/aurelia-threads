// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

/**
 * This config is an object that allows us to attach this Firebase app instance to that instance that we
have online. We have the library installed, but there's no way of us telling Firebas this instance that you're using 
should be referring to the one that you have created inside of Firebase Console, specifically this one right here. */

const firebaseConfig = {
  apiKey: "AIzaSyAQzPRzwfvGYVVRk5xa8ezeTcQwmWzzpRk",
  authDomain: "aurelia-threads-db.firebaseapp.com",
  projectId: "aurelia-threads-db",
  storageBucket: "aurelia-threads-db.appspot.com",
  messagingSenderId: "367438182562",
  appId: "1:367438182562:web:7cc6db7f030c7145e77ffb",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);

  //if user data does not exist
  //Create / set the document with the data from userAuth in my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWIthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWIthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
