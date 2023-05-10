import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const HeaderText = styled.div`
  display: flex;
  max-width: 1920px;
  height: 150px;
  padding: 20px;
  border: 2px solid black;

  justify-content: center;
  align-items: center;
  font-size: 45px;
`;

export function Header() {
  const navigate = useNavigate();
  return (
    <HeaderText>
      <div className="buttons">
        <button onClick={() => navigate("/login")} className="firstbutton">
          Login
        </button>
        <button onClick={() => navigate("/register")} className="firstbutton">
          Register
        </button>
      </div>
    </HeaderText>
  );
}
