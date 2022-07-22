import firebase from "firebase/app";
import "firebase/auth";

const app =firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: "practice-910fb.firebaseapp.com",
      projectId: "practice-910fb",
      storageBucket: "practice-910fb.appspot.com",
      messagingSenderId: "827855634395",
      appId: "1:827855634395:web:b69dd10756046b90dab1fe"
})
