// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATb2hlG_i1Xq2KjrJo4pCQCh8BqgwRo4Y",
  authDomain: "rent-baby-sale-react.firebaseapp.com",
  projectId: "rent-baby-sale-react",
  storageBucket: "rent-baby-sale-react.appspot.com",
  messagingSenderId: "340821917871",
  appId: "1:340821917871:web:283785cce26e330d18d45a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
