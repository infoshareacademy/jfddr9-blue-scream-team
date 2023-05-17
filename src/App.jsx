import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import { Header } from "./components/Auth/header";
import { Search } from "./components/search";
import { Main } from "./components/main";
// import { Footer } from "./components/footer";
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
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { AuthButtons } from "./components/Auth/AuthButtons";
import ConfirmationModal from "./components/ConfirmationModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "./pages/Cart";

const Contener = styled.div`
  font-size: 36px;
`;

function App() {
  const text = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <>
      <AuthButtons />
      {/* <ConfirmationModal /> */}

      <Contener>
        <Routes>
          <Route path={"/home"} element={<Home></Home>} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/cart"} element={<Cart />} />

        </Routes>
      </Contener>
    </>
  );
}

export default App;
