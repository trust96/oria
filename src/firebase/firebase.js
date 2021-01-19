import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh7SWH22ymjwEen56Dk4ozrj8E6RbznyE",
  authDomain: "react-e761c.firebaseapp.com",
  projectId: "react-e761c",
  storageBucket: "react-e761c.appspot.com",
  messagingSenderId: "968591836534",
  appId: "1:968591836534:web:d26ded1c299126680f6657",
  measurementId: "G-RCZEKXTR3S"
};

firebase.initializeApp(firebaseConfig);

export default firebase;