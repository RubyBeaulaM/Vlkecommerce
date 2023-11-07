// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9ctJjn0CCoge5Kv6pUxqlTH_GD2TuPbg",
  authDomain: "velankanni-ecommerce-6a41d.firebaseapp.com",
  projectId: "velankanni-ecommerce-6a41d",
  storageBucket: "velankanni-ecommerce-6a41d.appspot.com",
  messagingSenderId: "918842434878",
  appId: "1:918842434878:web:9d4509636789eb99f0f86f",
  measurementId: "G-7WG5S3L8H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);