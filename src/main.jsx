import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlPOb-D6w7VcEEtcgPU3BhOMoys7PJYsw",
  authDomain: "tiendafunko-react.firebaseapp.com",
  projectId: "tiendafunko-react",
  storageBucket: "tiendafunko-react.appspot.com",
  messagingSenderId: "657225981346",
  appId: "1:657225981346:web:9a30bfbeff5d2bc6a8a6fb"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

