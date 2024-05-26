// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCTqcE46_lH_KnFdhAaObLU8wfOqhKUe4s",

  authDomain: "mitt-projekt-52b61.firebaseapp.com",

  projectId: "mitt-projekt-52b61",

  storageBucket: "mitt-projekt-52b61.appspot.com",

  messagingSenderId: "371530031461",

  appId: "1:371530031461:web:fcbdfb1216795660b0818c",

  measurementId: "G-S0C7FFBCTV"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);

