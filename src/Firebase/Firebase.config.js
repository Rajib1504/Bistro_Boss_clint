// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDXPW5Hclixfbw-ZBPrKVn0ROMqva2SccE",
  authDomain: "bistro-boss-8e1b2.firebaseapp.com",
  projectId: "bistro-boss-8e1b2",
  storageBucket: "bistro-boss-8e1b2.firebasestorage.app",
  messagingSenderId: "51256654818",
  appId: "1:51256654818:web:d12a1ee929e4df4a4ed7bb",
};

// Debugging: Log API Key to confirm it is loaded
// console.log("API Key:", firebaseConfig.apiKey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
