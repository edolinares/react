import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6tHs-fwnX3gtnTAccLGBgtT77pgK_Jo",
  authDomain: "reactapp-9b014.firebaseapp.com",
  projectId: "reactapp-9b014",
  storageBucket: "reactapp-9b014.appspot.com",
  messagingSenderId: "920934731018",
  appId: "1:920934731018:web:4b39c716a72e9b43267ef3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>

      <App />

  </>
);
