import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
