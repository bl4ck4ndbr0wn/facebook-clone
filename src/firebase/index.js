import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD6t7imjbB_3a_0LnWOWvxckRli5DBVXc0',
  authDomain: 'facebook-clone-9de0d.firebaseapp.com',
  projectId: 'facebook-clone-9de0d',
  storageBucket: 'facebook-clone-9de0d.appspot.com',
  messagingSenderId: '758441966056',
  appId: '1:758441966056:web:df1c500b88a75ac0770c5d',
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
