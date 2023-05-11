import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { useNavigate } from "react-router-dom";
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
import { Login } from "./components/Login";
import { AuthButtons } from "./components/Auth/AuthButtons";

const Contener = styled.div`
  font-size: 36px;
`;

function App() {
  const text = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <>
      <AuthButtons />

      <Contener>
        <Routes>
          <Route path={"/home"} element={<Home></Home>} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </Contener>
    </>
  );
}

export default App;
