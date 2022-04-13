import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXeYtSdfhtROFR0fOWtzwV1-uv4-QrCsw",
  authDomain: "gb-react-chat-6c071.firebaseapp.com",
  databaseURL: "https://gb-react-chat-6c071-default-rtdb.firebaseio.com",
  projectId: "gb-react-chat-6c071",
  storageBucket: "gb-react-chat-6c071.appspot.com",
  messagingSenderId: "172077177661",
  appId: "1:172077177661:web:dc2ee3015990270dc0c354",
  measurementId: "G-PHWL47TBSD",
};

export const fb = firebase;
fb.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();
// export const db = firebase.database();

// export const rootRef = db.ref("root");
// export const messageRef = db.ref("message");
// export const chatRef = messageRef.child("chat");
// export const messagesRef = messageRef.child("messages");
// export const chatsRef = rootRef.child("chats");
