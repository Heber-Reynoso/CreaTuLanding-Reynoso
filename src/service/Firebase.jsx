// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5sQ6sPgE7qJ0izfUtp7o9Y4XKdsCyAqs",
  authDomain: "react-reynoso.firebaseapp.com",
  projectId: "react-reynoso",
  storageBucket: "react-reynoso.firebasestorage.app",
  messagingSenderId: "1060018759036",
  appId: "1:1060018759036:web:24323d42dc24845f46b0f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)