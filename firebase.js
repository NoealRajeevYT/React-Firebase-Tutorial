import firebase from "firebase/app"

const app = firebase.initializeApp({
    apiKey: process.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.REACT_APP_FIREBASE_STORAGE,
    messagingSenderId: process.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()