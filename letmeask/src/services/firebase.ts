import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "process.env.",
  authDomain: "letmeask-8b1b1.firebaseapp.com",
  databaseURL: "https://letmeask-8b1b1-default-rtdb.firebaseio.com",
  projectId: "letmeask-8b1b1",
  storageBucket: "letmeask-8b1b1.appspot.com",
  messagingSenderId: "925674843312",
  appId: "1:925674843312:web:6442d6de328eb71295df75"
};
  firebase.initializeApp(firebaseConfig)

 export const auth = firebase.auth();
 export const database = firebase.database();