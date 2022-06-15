// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF-VgxeJqXUAz1-ouVdDq7H32Z7YSiCd8",
    authDomain: "catering-7ed9a.firebaseapp.com",
    projectId: "catering-7ed9a",
    storageBucket: "catering-7ed9a.appspot.com",
    messagingSenderId: "775118355512",
    appId: "1:775118355512:web:c914ae8a7ef2bf45f5facd",
    measurementId: "G-18FK7F0V0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);