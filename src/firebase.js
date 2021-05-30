import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB28wo6hPTE35rvKD4QUshvCTR8eNVQDms",
    authDomain: "unichat-10659.firebaseapp.com",
    projectId: "unichat-10659",
    storageBucket: "unichat-10659.appspot.com",
    messagingSenderId: "238892029475",
    appId: "1:238892029475:web:b4d11cbacaaf3394ab8396",
  })
  .auth();
