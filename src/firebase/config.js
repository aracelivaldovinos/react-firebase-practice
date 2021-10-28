import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { connectStorageEmulator } from '@firebase/storage';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
// }

const firebaseConfig = {
  apiKey: "AIzaSyAXvdd-iSf-shXdJjhdN9sCOv-59tLqCPM",
  authDomain: "fir-practice-firegram.firebaseapp.com",
  projectId: "fir-practice-firegram",
  storageBucket: "fir-practice-firegram.appspot.com",
  messagingSenderId: "955235685739",
  appId: "1:955235685739:web:111617b861e0654c5fa82e"
}


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };


