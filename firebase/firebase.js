// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCtNXO-OGt_E2daJkMno1iicaqxDcd5Rjs",
//     authDomain: "ohana-firebase.firebaseapp.com",
//     projectId: "ohana-firebase",
//     storageBucket: "ohana-firebase.appspot.com",
//     messagingSenderId: "210341462463",
//     appId: "1:210341462463:web:352a449ed012aa2d47210a"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCmcC141YHPliG8zhq_eBRvOicVvvMyB1o",
    authDomain: "test-636a1.firebaseapp.com",
    databaseURL: "https://test-636a1-default-rtdb.firebaseio.com",
    projectId: "test-636a1",
    storageBucket: "test-636a1.appspot.com",
    messagingSenderId: "249603180142",
    appId: "1:249603180142:web:d86d829143b04c425a887f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

