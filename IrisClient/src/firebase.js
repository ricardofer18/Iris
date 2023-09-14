import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = { 
  apiKey: "AIzaSyAK_g3Yk3PFAW92IvUYUnPWC8FFWbyDuJg", 
  authDomain: "iris-arduino-v1.firebaseapp.com", 
  databaseURL: "https://iris-arduino-v1-default-rtdb.firebaseio.com", 
  projectId: "iris-arduino-v1", 
  storageBucket: "iris-arduino-v1.appspot.com", 
  messagingSenderId: "595772047177", 
  appId: "1:595772047177:web:d5877d41705cff1affe498", 
  measurementId: "G-WPC6SJY6TJ" 
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;