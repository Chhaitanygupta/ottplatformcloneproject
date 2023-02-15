import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc_pPulaca8yzs-j5dmKe6fPdxnfxVZeE",
  authDomain: "ott-platform-ff8f4.firebaseapp.com",
  projectId: "ott-platform-ff8f4",
  storageBucket: "ott-platform-ff8f4.appspot.com",
  messagingSenderId: "659610550145",
  appId: "1:659610550145:web:3a05eaaea2f385a9f13280"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db; 