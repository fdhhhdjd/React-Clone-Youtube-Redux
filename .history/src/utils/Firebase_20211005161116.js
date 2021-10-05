import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuHdamxEbWEsZyDbVcHXlDbTYH5gbws5g",
  authDomain: "react-1a94f.firebaseapp.com",
  projectId: "react-1a94f",
  storageBucket: "react-1a94f.appspot.com",
  messagingSenderId: "1036854153627",
  appId: "1:1036854153627:web:536788a120344ec2cf913e",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
