import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBdj5vp3oCq4MjS6fFRSYeW261h5-vzklk",
  authDomain: "inst-aa385.firebaseapp.com",
  projectId: "inst-aa385",
  storageBucket: "inst-aa385.appspot.com",
  messagingSenderId: "463327309722",
  appId: "1:463327309722:web:1161a9b049c780d4f25423",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
