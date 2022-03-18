
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArPOlie-EZJrUbBIWyeFi4SJv1SApx-as",
    authDomain: "to-do-b7814.firebaseapp.com",
    projectId: "to-do-b7814",
    storageBucket: "to-do-b7814.appspot.com",
    messagingSenderId: "145393516924",
    appId: "1:145393516924:web:bd0241f313fa4e8aa664f9",
    measurementId: "G-GFPF8HQ1XC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
//   const analytics = getAnalytics(app);

export{
    db,
    googleAuthProvider,
    firebase
}