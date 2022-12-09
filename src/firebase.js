import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAuKh5maruWwFj1xpsiZIwMK5CHVQjc1aE',
  authDomain: 'nwitter-1664a.firebaseapp.com',
  projectId: 'nwitter-1664a',
  storageBucket: 'nwitter-1664a.appspot.com',
  messagingSenderId: '465418097948',
  appId: '1:465418097948:web:c117bb82b1f524a32456d9',
};
const firebase = initializeApp(firebaseConfig);

export default firebase;
