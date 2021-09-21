// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEn-WCkIOyiJZNU94CW44vJfoqrSpJR4k",
  authDomain: "financepeer-auth.firebaseapp.com",
  projectId: "financepeer-auth",
  storageBucket: "financepeer-auth.appspot.com",
  messagingSenderId: "741796727408",
  appId: "1:741796727408:web:71cf9184246e3f99c4c2b5"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();