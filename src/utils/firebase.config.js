// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO36mxIWqF-f9NiqQdbDRPdkg81Y59mDo",
  authDomain: "netflixgpt-41bf1.firebaseapp.com",
  projectId: "netflixgpt-41bf1",
  storageBucket: "netflixgpt-41bf1.firebasestorage.app",
  messagingSenderId: "169106696648",
  appId: "1:169106696648:web:8a6a38ce8fc0074bb8f8fd",
  measurementId: "G-7FLGWWB62X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();