import { useNavigate } from "react-router-dom";

export function SignInButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/login")} className="firstbutton">
      Zaloguj się
    </button>
  );
}
