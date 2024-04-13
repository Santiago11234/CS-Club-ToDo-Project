// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiCSH6uPlxeNnTdA4V_Yav9Rqq2h5wUQU",
  authDomain: "cs-club-todo-backend.firebaseapp.com",
  projectId: "cs-club-todo-backend",
  storageBucket: "cs-club-todo-backend.appspot.com",
  messagingSenderId: "388705729974",
  appId: "1:388705729974:web:3316487ecceb98744f1517",
  measurementId: "G-6X44373J9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
