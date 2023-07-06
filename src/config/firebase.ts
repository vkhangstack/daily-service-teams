import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSZsxoAB1iY91xw0x6yr_kSu02PwRf95k',
  authDomain: 'dev-example-b572b.firebaseapp.com',
  databaseURL: 'https://dev-example-b572b-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'dev-example-b572b',
  storageBucket: 'dev-example-b572b.appspot.com',
  messagingSenderId: '771730937711',
  appId: '1:771730937711:web:c3cdc5332f8705ff05ba9a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
