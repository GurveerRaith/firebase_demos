//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAQpHeWrEGrbptdzyUEVmhFNtDKm60-F2o",
    authDomain: "comp1800-202410-demo-e398f.firebaseapp.com",
    projectId: "comp1800-202410-demo-e398f",
    storageBucket: "comp1800-202410-demo-e398f.appspot.com",
    messagingSenderId: "1059038512329",
    appId: "1:1059038512329:web:f3886d5a1508cad7d4b918"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
