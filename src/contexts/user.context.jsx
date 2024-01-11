import { useState, createContext, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// every created context requires its own provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // used to listen for global changes to the user sign-in/out state
  useEffect(() => {
    // unsubscribes from authentication 'stream', ie cleanup function
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
