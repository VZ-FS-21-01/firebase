import firebase from 'firebase'

const fire = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY, // Auth / General
    authDomain: process.env.REACT_APP_AUTH_DOMAIN, // General use
    projectId: process.env.REACT_APP_PROJECT_ID, // General use
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET, // Storage
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID, // Message
    appId: process.env.REACT_APP_APP_ID // General use
    // analytics
    // database
})

export default fire