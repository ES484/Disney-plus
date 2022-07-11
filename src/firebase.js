import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB9B5KQYEmNmE8-bur7lZ7ls7IG2hc9Igg",
    authDomain: "disney-plus-9e3c8.firebaseapp.com",
    projectId: "disney-plus-9e3c8",
    storageBucket: "disney-plus-9e3c8.appspot.com",
    messagingSenderId: "521550352393",
    appId: "1:521550352393:web:a17ee1060e3009215128d8",
    measurementId: "G-H353T8WYY0"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default firebaseConfig;