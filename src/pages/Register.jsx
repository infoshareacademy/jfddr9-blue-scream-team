import { getFormData } from "../components/utils/getFormData";
import { auth } from "../api/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  sendSignInLinkToEmail,
  getAuth,
} from "firebase/auth";
import { firebaseErrors } from "../components/utils/firebaseErrors";
import { useState } from "react";
import { db } from "../api/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getPassword } from "../components/utils/getPassword";
import { useNavigate } from "react-router-dom";
export function Register() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    if (getPassword(e)) {
      const { name, lastName, email, password } = getFormData(e);
      createUserWithEmailAndPassword(auth, email, password, name, lastName)
        .then((jwt) => {
          e.target.reset();
          signOut(auth);
          sendEmail(email);
          navigate("/login");
        })
        .catch((e) => {
          console.dir(e);
          alert(firebaseErrors[e.code]);
        });
    } else {
      alert("Incorrect password");
    }
  };
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://solid-umbrella-9kwygj6.pages.github.io/",
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "example.page.link",
  };
  const auth = getAuth();
  const sendEmail = (email) => {
    // sendSignInLinkToEmail(auth, email, actionCodeSettings)
    //   .then(() => {
    //     // The link was successfully sent. Inform the user.
    //     // Save the email locally so you don't need to ask the user for it again
    //     // if they open the link on the same device.
    //     window.localStorage.setItem("emailForSignIn", email);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ...
    //   });
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="registerpage">
      <form onSubmit={handleRegister}>
        <input className="input" placeholder="Name" name="name"></input>
        <input className="input" placeholder="Lastname" name="lastName"></input>
        <input className="input" placeholder="E-mail" name="email" type="email"></input>
        <input className="input" placeholder="Password" name="password" type="password"></input>
        <input className="input"
          placeholder="Repeat password"
          name="password1"
          type="password"
        ></input>
        
        <button className="firstbutton"  type="submit">Register</button>
        <button className="firstbutton" onClick={navigateToLogin}>
        Login
      </button>
      </form>
      
    </div>
  
  );
}