import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZm3YuwQkgNaA7bdseWwrdnNYk8OFViTg",
  authDomain: "revenant-55ed4.firebaseapp.com",
  projectId: "revenant-55ed4",
  storageBucket: "revenant-55ed4.appspot.com",
  messagingSenderId: "953773619248",
  appId: "1:953773619248:web:155fb92b09d44e2d6955f5",
  measurementId: "G-4GTCMST9HF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
