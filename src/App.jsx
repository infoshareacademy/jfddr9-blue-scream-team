import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { db } from "./api/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { Register } from "./components/Register";

const Contener = styled.div`
  font-size: 36px;
`;

function App() {
  const text = useSelector((state) => state);

  return (
    <Contener>
      {text.exampleReducer.text}
      <Routes>
        <Route path={"/home"} element={<div>home</div>} />
        <Route path={"/login"} element={<div>login</div>} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </Contener>
  );
}

export default App;
