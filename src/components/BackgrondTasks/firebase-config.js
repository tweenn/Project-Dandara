import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeWYhYunMDZ--F3MJoEoLIZ_k1ZBSjzaI",
  authDomain: "projectdandara-633a0.firebaseapp.com",
  projectId: "projectdandara-633a0",
  storageBucket: "projectdandara-633a0.appspot.com",
  messagingSenderId: "54048607434",
  appId: "1:54048607434:web:efae28da83be14d19f3833",
  measurementId: "G-Y8YKXSX7Q8"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
