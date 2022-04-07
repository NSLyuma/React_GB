import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXeYtSdfhtROFR0fOWtzwV1-uv4-QrCsw",
  authDomain: "gb-react-chat-6c071.firebaseapp.com",
  projectId: "gb-react-chat-6c071",
  storageBucket: "gb-react-chat-6c071.appspot.com",
  messagingSenderId: "172077177661",
  appId: "1:172077177661:web:92ee3ea9989068a5c0c354",
  measurementId: "G-82ZYJ24YGM",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("root");
export const messageRef = db.ref("message");
export const chatRef = messageRef.child("chat");
export const messagesRef = messageRef.child("messages");
export const chatsRef = rootRef.child("chats");
