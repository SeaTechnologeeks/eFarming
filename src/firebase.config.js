import { getApp, getApps, initializeApp } from 'firebase/app';
import  { getFirestore } from  'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBiz4QEQQ2DAqtXJBRCus0Dg0H0Fmkh-R4",
    authDomain: "farmingapp-878ee.firebaseapp.com",
    databaseURL: "https://farmingapp-878ee-default-rtdb.firebaseio.com",
    projectId: "farmingapp-878ee",
    storageBucket: "farmingapp-878ee.appspot.com",
    messagingSenderId: "242725812422",
    appId: "1:242725812422:web:ed07e228070176bb65bfc7",
    measurementId: "G-NL491PQRDS"
  };
  
  
  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage};