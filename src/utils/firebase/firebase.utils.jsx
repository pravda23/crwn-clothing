import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqWsG1hkE9t97_WJPlKmAaX4WCkZ6o8-4",
  authDomain: "crwn-clothing-db-fbf65.firebaseapp.com",
  projectId: "crwn-clothing-db-fbf65",
  storageBucket: "crwn-clothing-db-fbf65.appspot.com",
  messagingSenderId: "989045982242",
  appId: "1:989045982242:web:0c46fa9272259882e1f67b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, provider);
};
