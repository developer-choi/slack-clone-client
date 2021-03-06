import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCLIsMGeVPXTr0QZVhImizja7_eKP1N2sY",
  authDomain: "slack-clone-d3936.firebaseapp.com",
  projectId: "slack-clone-d3936",
  storageBucket: "slack-clone-d3936.appspot.com",
  messagingSenderId: "1063178054811",
  appId: "1:1063178054811:web:1b329a772144688c65aa3e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
  auth,
  provider,
  db
};
