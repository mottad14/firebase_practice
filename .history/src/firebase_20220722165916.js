import firebase from "firebase/app";
import "firebase/auth";

const app =firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket:process.env. ,
      messagingSenderId: process.env.,
      appId: process.env.
})
