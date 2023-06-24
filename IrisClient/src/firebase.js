import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBTsDEt60eA2rGSMK4KeyS1VWArEFgZHrA",
  authDomain: "waterdetector-c26ad.firebaseapp.com",
  databaseURL: "https://waterdetector-c26ad-default-rtdb.firebaseio.com",
  projectId: "waterdetector-c26ad",
  storageBucket: "waterdetector-c26ad.appspot.com",
  messagingSenderId: "887406191860",
  appId: "1:887406191860:web:f1b07685ff9f336783aaa1",
  measurementId: "G-T8KYJXEK15"
}

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;