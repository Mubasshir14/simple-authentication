// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7rIFI-kiSbJCZKZJExudjHqsU3WiRSow",
  authDomain: "fir-auth-conceptual-71199.firebaseapp.com",
  projectId: "fir-auth-conceptual-71199",
  storageBucket: "fir-auth-conceptual-71199.appspot.com",
  messagingSenderId: "1059552992088",
  appId: "1:1059552992088:web:1912eea955ad4cd927232d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;