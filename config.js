import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDUojdqLRv0Az7IGWxVF0WPE38HGjQULb0",
  authDomain: "project-60-1ddf3.firebaseapp.com",
  databaseURL: "https://project-60-1ddf3-default-rtdb.firebaseio.com",
  projectId: "project-60-1ddf3",
  storageBucket: "project-60-1ddf3.appspot.com",
  messagingSenderId: "1085534557548",
  appId: "1:1085534557548:web:a2d05cb48054e1fd854f49"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
