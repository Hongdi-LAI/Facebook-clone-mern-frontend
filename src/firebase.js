import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD41LUKurX-Bq-oRNJL_Qhs3XnCxy6HJs0",
  authDomain: "facebook-clone-f6dce.firebaseapp.com",
  databaseURL: "https://facebook-clone-f6dce.firebaseio.com",
  projectId: "facebook-clone-f6dce",
  storageBucket: "facebook-clone-f6dce.appspot.com",
  messagingSenderId: "173798223641",
  appId: "1:173798223641:web:95f9cc3f8b6faa15fe5f88",
  measurementId: "G-199S453EJ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
