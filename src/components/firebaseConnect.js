import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC-hLc-CrtH7iQSVP1nHAwsVp64SII-nJA",
  authDomain: "notereactjs-4e27c.firebaseapp.com",
  databaseURL: "https://notereactjs-4e27c.firebaseio.com",
  projectId: "notereactjs-4e27c",
  storageBucket: "notereactjs-4e27c.appspot.com",
  messagingSenderId: "22901860181",
  appId: "1:22901860181:web:eddcef1f1bca50abe371dc",
  measurementId: "G-T7R5DD5R8Z"
};
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('dataForNote');