
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9b1BSf01Xli56erGN-wGKJyGzAfZzj04",
  authDomain: "house-marketplace-app-1bce5.firebaseapp.com",
  projectId: "house-marketplace-app-1bce5",
  storageBucket: "house-marketplace-app-1bce5.appspot.com",
  messagingSenderId: "842773337886",
  appId: "1:842773337886:web:84c3edd1298aa4758bdb0f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()