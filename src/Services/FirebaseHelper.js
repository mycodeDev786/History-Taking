// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe-EhPfNuR6__1gSoiWtXW3iP0eFngBlI",
  authDomain: "history-taking-25a1c.firebaseapp.com",
  projectId: "history-taking-25a1c",
  storageBucket: "history-taking-25a1c.appspot.com",
  messagingSenderId: "745937464162",
  appId: "1:745937464162:web:5083305ac1f13070059a3b",
  measurementId: "G-VZYTRVGWKD",
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
