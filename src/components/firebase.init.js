// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgSDEO8T9VyPVF02guPzd-td3p8u_t2LE",
    authDomain: "private-route-app.firebaseapp.com",
    projectId: "private-route-app",
    storageBucket: "private-route-app.appspot.com",
    messagingSenderId: "889861186574",
    appId: "1:889861186574:web:ec17182a08b1f39ae8485f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;