import React from "react";
import { useNavigate } from "react-router-dom";

export function CityListButton() {
  const navigate = useNavigate();
  const navigateToCityList = () => {
    navigate("/citylist");
  };

  return (
    <button className="firstbutton"  type="submit" onClick={navigateToCityList}>
      Go to Places
    </button>
  );
}

export default CityListButton;
