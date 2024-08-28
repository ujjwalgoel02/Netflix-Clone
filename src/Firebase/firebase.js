import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAw3JqehugKOjnLmYBKcZgqLKDsFomUgJI",
  authDomain: "netflixclone-1b1ef.firebaseapp.com",
  projectId: "netflixclone-1b1ef",
  storageBucket: "netflixclone-1b1ef.appspot.com",
  messagingSenderId: "691589172132",
  appId: "1:691589172132:web:67e74886887faa23724f31",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async(email, password) => {
  try{
      await signInWithEmailAndPassword(auth, email, password);
  }
  catch(error){
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};


const logout = () =>{
    signOut(auth);
}


export{auth, db, login, signup, logout }