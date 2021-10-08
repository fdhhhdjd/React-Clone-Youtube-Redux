import firebase from "firebase/compat/app";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8fCVX-YUkKr3YzM4cGJr8L9TE4KiO2yA",
  authDomain: "react-firebase-703a3.firebaseapp.com",
  databaseURL: "https://react-firebase-703a3-default-rtdb.firebaseio.com",
  projectId: "react-firebase-703a3",
  storageBucket: "react-firebase-703a3.appspot.com",
  messagingSenderId: "88018014464",
  appId: "1:88018014464:web:14a1e361c51895431ae3e5",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
