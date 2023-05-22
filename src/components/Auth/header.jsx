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
const HeaderText = styled.div`
  display: flex;
  max-width: 1920px;
  height: 100px;
  padding: 20px;

  justify-content: center;
  align-items: center;
  font-size: 45px;
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
    <HeaderText>
      <div className="buttons">
        {isAuth && (
          <button onClick={handleClick} className="firstbutton">
            Logout
          </button>
        )}
      </div>
    </HeaderText>
  );
}
