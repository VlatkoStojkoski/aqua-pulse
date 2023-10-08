import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyyDV-8zGiBa8phNBoa8rWuJI21B-EgSA",
  authDomain: "aqua-pulse-nasa.firebaseapp.com",
  projectId: "aqua-pulse-nasa",
  storageBucket: "aqua-pulse-nasa.appspot.com",
  messagingSenderId: "71063223071",
  appId: "1:71063223071:web:054bf2360cd9906f324e2a",
  measurementId: "G-L8MHEXZZMS"
};

export const app = initializeApp(firebaseConfig);

export const realtime = getDatabase();