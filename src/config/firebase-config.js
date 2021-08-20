import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAjan24XjZjK_JGtxlAS372oTECucl4_Bk",
    authDomain: "hostel-e2938.firebaseapp.com",
    projectId: "hostel-e2938",
    storageBucket: "hostel-e2938.appspot.com",
    messagingSenderId: "74975541064",
    appId: "1:74975541064:web:6c84ae43aa41115b5e657d",
    measurementId: "G-LQ74QB8EB9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;