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
import { clickfunction } from "../../components/Theme";
import { clickfunction2 } from "../../components/Theme";
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
      <img className="logo" src={logo}></img>

      <div className="buttons">
        {/* <button onClick={() => clickfunction()} className="firstbutton">Dark mode</button>

            <button onClick={() => clickfunction2()} className="firstbutton">Light mode</button> */}
        <RegisterButton />
        <SignInButton />
      </div>
      <div className="buttons">
        {isAuth && (
          <button onClick={handleClick} className="firstbutton">
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
