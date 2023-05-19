import React from "react";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <button className="firstbutton" type="submit" onClick={navigateToCart}>
      Go to list
    </button>
  );
}

export default CartButton;
