//firebase

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyD4PQkPIfcDB7xZlK_Hmakm0HZbUlfpd7E',
  authDomain: 'twitterrrrr-a7b69.firebaseapp.com',
  projectId: 'twitterrrrr-a7b69',
  storageBucket: 'twitterrrrr-a7b69.appspot.com',
  messagingSenderId: '845447790177',
  appId: '1:845447790177:web:3a39bd689254c1210cf420',
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
