// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3zdtIylB3JUY0BDKMoXEw_mJ6hh4DmE",
  authDomain: "authentication-ca310.firebaseapp.com",
  projectId: "authentication-ca310",
  storageBucket: "authentication-ca310.appspot.com",
  messagingSenderId: "433552177243",
  appId: "1:433552177243:web:ee203b19c77546fe23a77e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app; 