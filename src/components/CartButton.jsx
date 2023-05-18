import React from "react";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <button type="submit" onClick={navigateToCart}>
      Przejdź do listy
    </button>
  );
}

export default CartButton;
