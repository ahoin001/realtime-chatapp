// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  // config
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export const myApp = initializeApp(firebaseConfig);

// init services by making instance of them
export const db = getFirestore(myApp);
export const auth = getAuth(myApp);
export const logout = signOut;

const messagesRef = collection(db, "messages");

export const addUser = async () => {
  try {
    console.log("Firing add function");
    addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
      // createdAtTimeStamp
    }).then((res) => {
      console.log("Document written with ID: ", res);
    });

    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addMessage = async () => {
  try {
    console.log("Firing add function");
    addDoc(messagesRef, {
      text: " We fixed it!!!",
      createdAt: serverTimestamp(),
    }).then((res) => {
      console.log("Document written with ID: ", res.id);
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// export const sendMessage = async (e) => {
//   e.preventDefault();

//   try {
//     console.log("Firing send message function");
//     addDoc(collection(db, "messages"), {
//       text: "some text from a user",
//       // createdAtTimeStamp
//     }).then((res) => {
//       console.log("Document written with ID: ", res.id);
//     });
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

export const getUsers = async () => {
  console.log("Getting users");
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  console.log("After get users");
};

// getter/Listener for any changes in messages collections
// Runs once initially, then everytime there is a change in collection then returns new snapshot
// can call unsub to turn of listener
// export const unSub = onSnapshot(messagesRef, (snapshot) => {
//   console.log("I AM IN SNAPSHOT");
//   let messages = [];
//   snapshot.docs.forEach((doc) => {
//     messages.push({ ...doc.data() });
//   });
//   console.log("FROM SNAPSHOT: ", messages);
// });
