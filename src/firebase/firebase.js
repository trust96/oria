import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSdDJreqPNmZf4mwSgITQ4iuwiZ7Ld5s8",
    authDomain: "oful-5e728.firebaseapp.com",
    databaseURL: "https://oful-5e728-default-rtdb.firebaseio.com",
    projectId: "oful-5e728",
    storageBucket: "oful-5e728.appspot.com",
    messagingSenderId: "40690386948",
    appId: "1:40690386948:web:807d5d30a1894f0a60cd51",
    measurementId: "G-HJNJEWJVC5"
  };

  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();