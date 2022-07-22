
import firebase from "firebase/compat/app";
import "firebase/compat/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCKewSejnRjnXhwpl37S6OmgoeRv7sdhHU",
    authDomain: "firegram-for-firebase.firebaseapp.com",
    projectId: "firegram-for-firebase",
    storageBucket: "firegram-for-firebase.appspot.com",
    messagingSenderId: "964339634366",
    appId: "1:964339634366:web:5e5655965ce8b4921e0eef"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
