import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1QzBwCUMg_TjWBetNrPUZ2LmnLc-__f8",
    authDomain: "react-firebase-authentic-da4f9.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-da4f9.firebaseio.com",
    projectId: "react-firebase-authentic-da4f9",
    storageBucket: "react-firebase-authentic-da4f9.appspot.com",
    messagingSenderId: "176720916005"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth
  };