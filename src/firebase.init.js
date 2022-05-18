// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlOcpuDkxRCPNTMYS-vuec-HHPGknRuSw",
  authDomain: "job-task-4572b.firebaseapp.com",
  projectId: "job-task-4572b",
  storageBucket: "job-task-4572b.appspot.com",
  messagingSenderId: "418305382362",
  appId: "1:418305382362:web:f6e439ed2da389920592e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;