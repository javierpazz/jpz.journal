// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE3TTfWpX0bw3jr7tGIVRL2Udz4rway_U",
  authDomain: "jpz-journal.firebaseapp.com",
  projectId: "jpz-journal",
  storageBucket: "jpz-journal.appspot.com",
  messagingSenderId: "1081367883429",
  appId: "1:1081367883429:web:cfcf505c557b4c386ca74c"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );