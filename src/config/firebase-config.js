// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApAHHVSD-9BId-GMj7BAA0IUX91LeosB0",
  authDomain: "expense-tracker-d14e8.firebaseapp.com",
  projectId: "expense-tracker-d14e8",
  storageBucket: "expense-tracker-d14e8.appspot.com",
  messagingSenderId: "738196435189",
  appId: "1:738196435189:web:007916e2e57f751fe6d5bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
