import React from "react";
import { useNavigate } from "react-router-dom";

export function HomeButton() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <button type="submit" onClick={navigateToHome}>
      Przejdź do wyszukiwania atrakcji
    </button>
  );
}

export default HomeButton;
