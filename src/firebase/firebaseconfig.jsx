import firebase from 'firebase/app';
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAV4EbtuLllKuJsJ9Gl-i2_jZdTbcotHIo",
    authDomain: "chattwebapp.firebaseapp.com",
    databaseURL: "https://chattwebapp.firebaseio.com",
    projectId: "chattwebapp",
    storageBucket: "chattwebapp.appspot.com",
    messagingSenderId: "57367511329",
    appId: "1:57367511329:web:769b8641cf4c46227a3e60",
    measurementId: "G-R32FKQ6HVH"
  };

export default firebase.initializeApp(firebaseConfig);