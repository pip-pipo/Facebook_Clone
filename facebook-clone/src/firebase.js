import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALa7WEl6GGy85dNN8QgnTeL4rMPbQEJlE",
    authDomain: "facebook-clone-b552d.firebaseapp.com",
    projectId: "facebook-clone-b552d",
    storageBucket: "facebook-clone-b552d.appspot.com",
    messagingSenderId: "313608143607",
    appId: "1:313608143607:web:8f435b34e2149974e449f2",
    measurementId: "G-VPYTRG0QBZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth  ,provider};
export default db;