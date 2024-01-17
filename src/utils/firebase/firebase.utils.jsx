import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// creates user auth; sets display name, email and date
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// collectionKey is firebase category name, eg "users"
// objectsToAdd is the documents to add
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  // each object passed is an item in the SHOP_DATA array
  objectsToAdd.forEach((object) =>
    // collectionRef returned when collection method is called on db, now we use it to write objects
    {
      const docRef = doc(collectionRef, object.title.toLowerCase());

      // set will pass the value of the object and write object contents to the location set by collectionRef
      batch.set(docRef, object);
    }
  );
  await batch.commit();
  console.log("done");
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  // userSnapshot scans user database entry (uuid) and returns a valid user document by either retrieving and assigning it to userAuth (if exists) or creating it with setDoc (if !exists)
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

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
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("error creating the user", error.message);
      }
    }
  }

  console.log(userAuth);
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// creates a listener using the provided callback
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

/**
 * {
 * next: callback,
 * error: callback,
 * complete: completedCallback}
 *
 */
