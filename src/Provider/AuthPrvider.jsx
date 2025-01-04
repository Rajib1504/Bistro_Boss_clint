import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "./../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthPrvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  // create user
  const signup = (email, password) => {
    setLoading(ture);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // useEffect =
  //   (() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
  //       setUser(currentuser);
  //       console.log("current user", currentuser);
  //       setLoading(false);
  //     });
  //     return () => {
  //       return unsubscribe();
  //     };
  //   },
  //   []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    Loading,
    setLoading,
    signup,
    login,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPrvider;
