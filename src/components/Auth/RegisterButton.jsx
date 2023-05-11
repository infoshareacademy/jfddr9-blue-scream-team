import { useNavigate } from "react-router-dom";

export function RegisterButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/register")} className="firstbutton">
      Zarejestruj się
    </button>
  );
}
