// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaA-qcS2IKPS6aJjOhrs9ElbNh3cZLuWc",
  authDomain: "appdorrego102.firebaseapp.com",
  projectId: "appdorrego102",
  storageBucket: "appdorrego102.appspot.com",
  messagingSenderId: "1044753384890",
  appId: "1:1044753384890:web:ea319f8bea47f7cee2c983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore (app)