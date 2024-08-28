import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUpRuLVorMkWH43FpFmACsFL7VeqIr3Mo",
  authDomain: "clone-news-7224e.firebaseapp.com",
  projectId: "clone-news-7224e",
  storageBucket: "clone-news-7224e.appspot.com",
  messagingSenderId: "959731629035",
  appId: "1:959731629035:web:95f016986476daff6cb7ae",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
