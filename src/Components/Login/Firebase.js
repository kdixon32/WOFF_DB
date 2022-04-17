import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseapp = initializeApp({
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOM,
  projectId: process.env.REACT_APP_PROJ_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_FB_ID
});

export const auth = getAuth(firebaseapp);


