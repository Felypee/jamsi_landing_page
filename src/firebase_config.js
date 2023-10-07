// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEDtN5-Mb9FXzxDjhOL1O7v8PHpKB0wlQ",
  authDomain: "jamsi-e156e.firebaseapp.com",
  projectId: "jamsi-e156e",
  storageBucket: "jamsi-e156e.appspot.com",
  messagingSenderId: "635647124648",
  appId: "1:635647124648:web:a9fd3cf3c6f54a743e8e9d",
  measurementId: "G-B28FN0NDW0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);