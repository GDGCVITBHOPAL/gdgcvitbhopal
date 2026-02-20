import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7P9izycBcdsUV7H1lIaHcnRAcCZwnB2A",
  authDomain: "gdgc-j.firebaseapp.com",
  projectId: "gdgc-j",
  storageBucket: "gdgc-j.firebasestorage.app",
  messagingSenderId: "461316804704",
  appId: "1:461316804704:web:ba372aa5e82fbdd16cf305",
  measurementId: "G-K8G9R7LS4Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
