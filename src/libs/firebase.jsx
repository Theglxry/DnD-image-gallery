// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgNVHonU8nw3I-NhtFzSQmEOOr_vaxKUQ",
  authDomain: "dnd-image-gallery-178e0.firebaseapp.com",
  projectId: "dnd-image-gallery-178e0",
  storageBucket: "dnd-image-gallery-178e0.appspot.com",
  messagingSenderId: "709522763970",
  appId: "1:709522763970:web:1913a019ca934064ad0b5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)