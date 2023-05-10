import { getFormData } from "./utils/getFormData";
import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseErrors } from "./utils/firebaseErrors";
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

export function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    const { name, lastName, email, password } = getFormData(e);
    createUserWithEmailAndPassword(auth, email, password, name, lastName)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
        signOut(auth);
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Imię" name="name"></input>
      <input placeholder="Nazwisko" name="lastName"></input>
      <input placeholder="E-mail" name="email" type="email"></input>
      <input placeholder="Hasło" name="password" type="password"></input>
      <button type="submit">Zarejestruj się</button>
    </form>
  );
}
