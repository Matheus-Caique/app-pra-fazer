import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDn4T30xCtgWXa2uv4xN93AvcTPsq2kIEg",
  authDomain: "projetos-2026-1---matheusc.firebaseapp.com",
  projectId: "projetos-2026-1---matheusc",
  storageBucket: "projetos-2026-1---matheusc.firebasestorage.app",
  messagingSenderId: "788153572376",
  appId: "1:788153572376:web:7439a901bca35b6fa8f76d",
  measurementId: "G-DXZVYE86Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


export { auth, db }