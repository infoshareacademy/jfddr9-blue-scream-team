import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Home } from "./pages/Home";
import { Header } from "./pages/header";

const Contener = styled.div`
  font-size: 36px;
`;

function App() {
  const text: any = useSelector((state) => state);

  return (
    <>
      <Header />
      <Contener>
        <Routes>
          <Route path={"/home"} element={<Home></Home>} />
          <Route path={"/login"} element={<div>login</div>} />
        </Routes>
      </Contener>
    </>
  );
}

export default App;
