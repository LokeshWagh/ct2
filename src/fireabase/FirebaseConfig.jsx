// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
   

// data for push request
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain:import.meta.env.VITE_AUTODOMAIN,
      projectId:import.meta.env.VITE_PROJECTID,
      storageBucket:import.meta.env.VITE_STORAGE,
      messagingSenderId: import.meta.env.VITE_MESSAGE,
      appId: import.meta.env.VITE_APPID
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}