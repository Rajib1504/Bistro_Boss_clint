import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "./../Firebase/Firebase.config";
import UseAxiosPublic from "../hooks/AxiosSecure/UseAxiosPublic";
export const AuthContext = createContext(null);

const AuthPrvider = ({ children }) => {
  const axiosPublic = UseAxiosPublic(); //we will use public because this everyone will konw dont need to make it secure
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // create user
  const signup = (email, password) => {
    setLoading(true);
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
  // updagte profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // google sign in
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      if (currentUser) {
        //get token and store Client
        const userInfo = { email: currentUser.email }; // take the email from the current login user
        axiosPublic.post("/jwt", userInfo).then((res) => {
          // console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // TODO: remove GiToken(if token stored in the clint side: Local Storage,caching,in memory )for cookie we need to remove it form the backend
        localStorage.removeItem("access-token"); // we will remove the token
      }
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
    googleSignin,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPrvider;
