import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE9IKa0BWiNq0qir7TJnyvLFPQ3qrb-Uc",
  authDomain: "restaurant-app-5dcf0.firebaseapp.com",
  projectId: "restaurant-app-5dcf0",
  storageBucket: "restaurant-app-5dcf0.appspot.com",
  messagingSenderId: "10317499918",
  appId: "1:10317499918:web:6ac4ce63575aea2a0d765f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const persistenceSettings = {
  type: browserLocalPersistence,
};

export const db = getFirestore(app);
export const storage = getStorage(app);
