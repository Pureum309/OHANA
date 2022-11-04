// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set, onValue } from '@firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtNXO-OGt_E2daJkMno1iicaqxDcd5Rjs",
    authDomain: "ohana-firebase.firebaseapp.com",
    projectId: "ohana-firebase",
    storageBucket: "ohana-firebase.appspot.com",
    messagingSenderId: "210341462463",
    appId: "1:210341462463:web:352a449ed012aa2d47210a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

