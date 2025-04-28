
  // Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// js/firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyCaOsF57uc53x1Ebc9qomisXeWlEmC7nWU",
    authDomain: "food-bcd35.firebaseapp.com",
    projectId: "food-bcd35",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "89731453218",
    appId: "food-bcd35.web.app"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };