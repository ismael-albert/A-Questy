import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCTRqvQiPJScWCpffMceKKnRd5RCwOSiew",
    authDomain: "aquesty-44508.firebaseapp.com",
    databaseURL: "https://aquesty-44508-default-rtdb.firebaseio.com",
    projectId: "aquesty-44508",
    storageBucket: "aquesty-44508.appspot.com",
    messagingSenderId: "32673607974",
    appId: "1:32673607974:web:7a532921e2c0ef5f52d1e7"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();