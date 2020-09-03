import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSJpCiR7w3UmvlKY3RhKZeB8_6oc-WSRU",
  authDomain: "facebook-clone-1f57f.firebaseapp.com",
  databaseURL: "https://facebook-clone-1f57f.firebaseio.com",
  projectId: "facebook-clone-1f57f",
  storageBucket: "facebook-clone-1f57f.appspot.com",
  messagingSenderId: "744845014092",
  appId: "1:744845014092:web:d8e083b3293a169952b0e9",
  measurementId: "G-3E4VS5XK8S"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;