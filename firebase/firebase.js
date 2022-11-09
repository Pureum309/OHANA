// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBaYPIz2lHsLa7ES82bMSLPMdO7vRPezmI",
    authDomain: "ohana-db-18be1.firebaseapp.com",
    projectId: "ohana-db-18be1",
    storageBucket: "ohana-db-18be1.appspot.com",
    messagingSenderId: "432962378011",
    appId: "1:432962378011:web:aac5d9d1d4841160131bbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

