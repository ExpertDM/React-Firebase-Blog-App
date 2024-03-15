// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCgRETnJ3vY9aXyMcjVayosYUzeHhRjA1I",
  authDomain: "alapbn.firebaseapp.com",
  databaseURL: "https://alapbn-default-rtdb.firebaseio.com",
  projectId: "alapbn",
  storageBucket: "alapbn.appspot.com",
  messagingSenderId: "118103040583",
  appId: "1:118103040583:web:addfbc1f9e80654c7d0762",
  measurementId: "G-VJFDLDW7G5"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
