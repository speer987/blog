import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUdftyhnl6L2OYg6FmLvL_cMYeNU5K6A",
  authDomain: "blog-e59ab.firebaseapp.com",
  projectId: "blog-e59ab",
  storageBucket: "blog-e59ab.appspot.com",
  messagingSenderId: "817178029427",
  appId: "1:817178029427:web:50daf6f87d242a7b7b2906",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
