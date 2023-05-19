import React from "react";
import { useNavigate } from "react-router-dom";

export function CityListButton() {
  const navigate = useNavigate();
  const navigateToCityList = () => {
    navigate("/citylist");
  };

  return (
    <button type="submit" onClick={navigateToCityList}>
      Przejdź do listy miast
    </button>
  );
}

export default CityListButton;
