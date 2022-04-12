// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJtakPrKMW8KCZq7DxQ50v3q0hm1V-Zoo",
    authDomain: "amazane-a0272.firebaseapp.com",
    projectId: "amazane-a0272",
    storageBucket: "amazane-a0272.appspot.com",
    messagingSenderId: "612635625156",
    appId: "1:612635625156:web:3350956c0ad6f01a512b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;