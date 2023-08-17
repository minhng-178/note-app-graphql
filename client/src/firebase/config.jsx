// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCWz2zC3TopPtI-rVEvKIA6cLn99q8_WWQ',
  authDomain: 'note-app-fb0e2.firebaseapp.com',
  projectId: 'note-app-fb0e2',
  storageBucket: 'note-app-fb0e2.appspot.com',
  messagingSenderId: '1051732416016',
  appId: '1:1051732416016:web:eb984ddf2983eedd7b1c95',
  measurementId: 'G-FE44KWH9NC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
