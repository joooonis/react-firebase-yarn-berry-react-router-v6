import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
const firebase = initializeApp(firebaseConfig);

export default firebase;
