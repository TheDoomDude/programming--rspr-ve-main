// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAfpFdlcXHVC-Uwuw90sVbXttmSW3XjZkg",
  authDomain: "fir-website-c9b7c.firebaseapp.com",
  projectId: "fir-website-c9b7c",
  storageBucket: "fir-website-c9b7c.firebasestorage.app",
  messagingSenderId: "451374045117",
  appId: "1:451374045117:web:64c94c03b6caa45a03e4d4",
  measurementId: "G-TZ89780XHN"
};

//Opret forbindelse til firebase
firebase.initializeApp(firebaseConfig)
console.log('firebase startet med:', firebaseConfig.projectId)

//vi får nu en firestore objekt  som vi kan bruge til at kommunikere med firestore
var db = firebase.firestore()
console.log('forbindelse til firestore er oprettet')



