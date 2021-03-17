import firebaseAuth from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDItDfkpCkkTdKqInjgNDqvKOlDhHt3LFU",
    authDomain: "admin-98bbd.firebaseapp.com",
    databaseURL: "https://admin-98bbd-default-rtdb.firebaseio.com",
    projectId: "admin-98bbd",
    storageBucket: "admin-98bbd.appspot.com",
    messagingSenderId: "504982904410",
    appId: "1:504982904410:web:a77bcff610ee702c19c263"
};

export default firebaseAuth.initializeApp(firebaseConfig);