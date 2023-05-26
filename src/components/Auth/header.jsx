import styled from "styled-components";
import { useNavigate, useMatch, useLocation } from "react-router-dom";
import { auth } from "../../api/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  sendSignInLinkToEmail,
  getAuth,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import logo from "../../images/newlogo.svg";
import { clickfunction } from "../Theme";
import { clickfunction2 } from "../Theme";
import { RegisterButton } from "./RegisterButton";
import { SignInButton } from "./SignInButton";

const HeaderText = styled.div`
  // display: flex;
  // max-width: 1920px;
  // height: 100px;
  // padding: 20px;

  // justify-content: center;
  // align-items: center;
  // font-size: 45px;
`;

export function Header() {
  const location = useLocation();
  const match = useMatch("");
  // const [{ route }] = matchRoutes(routes, location);
  console.log(location);
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // 'admin' | 'user' | 'unauthorized' | null
  const ToHome = () => {
    navigate("/");
  };
  const GoHome = () => {
    navigate("/home");
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  if (isAuth === null) {
    return <h1>Loading...</h1>;
  }
  const handleClick = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="headerbuttons">
      <img
        onClick={ToHome}
        className="logo"
        style={{ cursor: "pointer" }}
        src={logo}
      ></img>

      <div className="headerexplore">
        <p className="maintitle">Bored? Plan your travel with us.</p>
        <button onClick={GoHome} className="explorebutton">
          Start your journey here
        </button>
      </div>

      <div className="buttons">
        {isAuth ? (
          <button onClick={handleClick} className="firstbutton">
            Logout
          </button>
        ) : (
          <>
            {location.pathname !== "/register" && <RegisterButton />}
            {location.pathname !== "/login" && <SignInButton />}
          </>
        )}
      </div>
    </div>
  );
}
