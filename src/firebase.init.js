// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwjvMjXbV6Ign8kajtHEvH_zZaaS5KjgQ",
  authDomain: "findfastai.firebaseapp.com",
  projectId: "findfastai",
  storageBucket: "findfastai.appspot.com",
  messagingSenderId: "700831780555",
  appId: "1:700831780555:web:efd2923faab10078e2154e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;