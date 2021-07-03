import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpHFHwvj3LWooW6Ju7v1m0rR53yLt-QUM",
    authDomain: "auth-connect-rd.firebaseapp.com",
    projectId: "auth-connect-rd",
    storageBucket: "auth-connect-rd.appspot.com",
    messagingSenderId: "525147960640",
    appId: "1:525147960640:web:55cc20e269d4670194f6a5"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const auth= firebaseapp.auth();
  const googleProvider=new firebase.auth.GoogleAuthProvider();
  const FacebookProvider=new firebase.auth.FacebookAuthProvider();
  const GithubProvider= new firebase.auth.GithubAuthProvider();

export{auth,googleProvider,FacebookProvider,GithubProvider};