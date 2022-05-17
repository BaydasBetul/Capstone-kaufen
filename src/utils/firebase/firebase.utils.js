import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe8DVx0Wis-WMrNcJLiZtDSBsaKVgklD8",
  authDomain: "capstone-kaufen-db.firebaseapp.com",
  projectId: "capstone-kaufen-db",
  storageBucket: "capstone-kaufen-db.appspot.com",
  messagingSenderId: "538226724619",
  appId: "1:538226724619:web:ef928f0cd33acccbd91c0e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  //console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
    return userDocRef;
  }
  //if user data exists

  //if user data doest not exist

  // return userDocRef;
};
