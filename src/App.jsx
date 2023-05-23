import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import { Header } from "./components/Auth/Header";
import { Search } from "./components/search";
import { Main } from "./components/main";
import Footer from "./components/footer";
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
import CityList from "./pages/CityList";
import Attraction from "./pages/Attraction";
import MyJourney from "./components/MyJourney";
import { Header as MainHeader } from "./pages/header";

const Contener = styled.div`
  background-color: hsl(158, 50%, 70%);
  font-size: 36px;
  height: 100%;
  border-radius: 30px;
  padding: 30px;
`;

function App() {
  const text = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Contener>
        {/* <AuthButtons /> */}

        {/* <ConfirmationModal /> */}

        <Routes>
          <Route path={"/home"} element={<Home></Home>} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/cityList"} element={<CityList />} />
          <Route path={"/attraction/:id"} element={<Attraction />} />
          <Route path={"/journey/:id"} element={<MyJourney />} />
        </Routes>
      </Contener>
      <Footer />
    </>
  );
}

export default App;
