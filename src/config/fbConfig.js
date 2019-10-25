import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2AYGPkHmeZaEuLcTXINfZjAdiq4ibIEg",
  authDomain: "nbaapp-7694d.firebaseapp.com",
  databaseURL: "https://nbaapp-7694d.firebaseio.com",
  projectId: "nbaapp-7694d",
  storageBucket: "nbaapp-7694d.appspot.com",
  messagingSenderId: "960888679733",
  appId: "1:960888679733:web:86d7cb0f281b541d3e307c",
  measurementId: "G-20D0HQWC6X"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();



export default firebase 


  
