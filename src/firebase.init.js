// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHeVbTk_P_LV6rePWJimJ1HQumFCaYV4Q",
  authDomain: "marriagograpy.firebaseapp.com",
  projectId: "marriagograpy",
  storageBucket: "marriagograpy.appspot.com",
  messagingSenderId: "819648870521",
  appId: "1:819648870521:web:5b197cb0a4441527373ca8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
