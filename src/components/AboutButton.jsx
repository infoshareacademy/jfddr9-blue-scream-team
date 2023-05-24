import { useNavigate } from "react-router-dom";

export function AboutButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")} className="firstbutton">
      About us
    </button>
  );
}
