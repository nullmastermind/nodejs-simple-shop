import * as firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCsFBsEgopP_lVPvUQOwL3F2E4mSPWgySw",
        authDomain: "shop-61c78.firebaseapp.com",
        databaseURL: "https://shop-61c78.firebaseio.com",
        projectId: "shop-61c78",
        storageBucket: "shop-61c78.appspot.com",
        messagingSenderId: "897123511792",
        appId: "1:897123511792:web:dbb72d6b0a08362ec48135",
    });
}

export default firebase;
