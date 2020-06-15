import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDahOwGCYVq3FXQa4P6Bd7qc9jfiCCTbM4",
  authDomain: "vue-project-97514.firebaseapp.com",
  databaseURL: "https://vue-project-97514.firebaseio.com",
  projectId: "vue-project-97514",
  storageBucket: "vue-project-97514.appspot.com",
  messagingSenderId: "134541740920",
  appId: "1:134541740920:web:5ccb80dffc49af0fafd68d",
  measurementId: "G-TVYNXDZ5T6"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// date issues fix
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
