import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STOREGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);


// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBMF7_ZBB1yHvn7iGTzcLsc63JqhbPHPFk",
//   authDomain: "auth-base-e7ef1.firebaseapp.com",
//   projectId: "auth-base-e7ef1",
//   storageBucket: "auth-base-e7ef1.appspot.com",
//   messagingSenderId: "158699732668",
//   appId: "1:158699732668:web:11955b1337ef19b1231ab9"
// };

// const app = initializeApp(firebaseConfig);