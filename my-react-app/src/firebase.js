import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC2aPsZRoLPizm7NKWOVhDNumscQZSujok",
  authDomain: "signup-and-login-using-vite.firebaseapp.com",
  projectId: "signup-and-login-using-vite",
  storageBucket: "signup-and-login-using-vite.appspot.com",
  messagingSenderId: "230759286542",
  appId: "1:230759286542:web:70f875b302263817cdf95f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

