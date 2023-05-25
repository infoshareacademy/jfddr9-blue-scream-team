import React from "react";
import { useNavigate } from "react-router-dom";

export function HomeButton() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <button className="firstbutton2" type="submit" onClick={navigateToHome}>
      Search
    </button>
  );
}

export default HomeButton;
