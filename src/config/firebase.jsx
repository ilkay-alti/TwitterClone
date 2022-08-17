//firebase

import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCZpcejdunWhUK7fcitwJ3XKOO_-E2u9Mw',
  authDomain: 'product-1-ce65d.firebaseapp.com',
  projectId: 'product-1-ce65d',
  storageBucket: 'product-1-ce65d.appspot.com',
  messagingSenderId: '684709733624',
  appId: '1:684709733624:web:89ada8d265a95479e6c70d',
  measurementId: 'G-EH76K7P2HT',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// auth.onAuthStateChanged((user) => {
//   console.log('Auth state changed');
//   console.log(user);
// });
