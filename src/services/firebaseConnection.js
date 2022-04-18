import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDd_hpQapfw21J_APPDBvvI_g3rHlK2rxE",
    authDomain: "tarefas-ec921.firebaseapp.com",
    projectId: "tarefas-ec921",
    storageBucket: "tarefas-ec921.appspot.com",
    messagingSenderId: "616311870638",
    appId: "1:616311870638:web:3a50bb51a5f9e93b43493f"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;