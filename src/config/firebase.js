import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJnRn5J7xaojpt3YX2u6h3BXjVFWGYc3Y",
    authDomain: "crud-vue-58145.firebaseapp.com",
    databaseURL: "https://crud-vue-58145.firebaseio.com",
    projectId: "crud-vue-58145",
    storageBucket: "crud-vue-58145.appspot.com",
    messagingSenderId: "883046261773",
    appId: "1:883046261773:web:4ae73f39b09c78de9d2144"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db}