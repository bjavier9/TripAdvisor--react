import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ6Gp5UJZMHX0hPrP7FPRFDVKCe1jbeoM",
  authDomain: "react-bfe1c.firebaseapp.com",
  databaseURL: "https://react-bfe1c.firebaseio.com",
  projectId: "react-bfe1c",
  storageBucket: "react-bfe1c.appspot.com",
  messagingSenderId: "500484897974",
  appId: "1:500484897974:web:b1b86a33fd2ae393763a17",
  measurementId: "G-FHSSV8R1NZ",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
