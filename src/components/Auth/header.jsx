import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  sendSignInLinkToEmail,
  getAuth,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import logo from "../../images/newlogo.png";
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
        <p className="maintitle">Your next travel starts here.</p>
        <button onClick={GoHome} className="explorebutton">
          Explore
        </button>
      </div>

      <div className="buttons">
        {isAuth ? (
          <button onClick={handleClick} className="firstbutton">
            Logout
          </button>
        ) : (
          <>
            <RegisterButton />
            <SignInButton />
          </>
        )}
      </div>
    </div>
  );
}
