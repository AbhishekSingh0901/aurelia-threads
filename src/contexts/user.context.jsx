import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth } from "../utils/firebase/firebase.utils";
import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

//actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unSubscribe;
  }, []);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
