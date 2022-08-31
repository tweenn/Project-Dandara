import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfep4PvVSmWDnqsC5MyYCfINcB6F5FkgA",
  authDomain: "project-dandara.firebaseapp.com",
  projectId: "project-dandara",
  storageBucket: "project-dandara.appspot.com",
  messagingSenderId: "943851393225",
  appId: "1:943851393225:web:cddfe2024a8a6baf19fd18",
  measurementId: "G-YH2SSG8RTG"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
