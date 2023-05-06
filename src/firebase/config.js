import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDtOufgg50j9iFT8NwRK6lG3N34bzGIiw",
    authDomain: "fir-olx-2e600.firebaseapp.com",
    projectId: "fir-olx-2e600",
    storageBucket: "fir-olx-2e600.appspot.com",
    messagingSenderId: "773201415195",
    appId: "1:773201415195:web:962e59fac6c208ababfcbe",
    measurementId: "G-GDQXC5TB75"
  };

   const Firebase = initializeApp(firebaseConfig)
   const db = getFirestore(Firebase)
export default db;