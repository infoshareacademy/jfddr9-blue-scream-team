import React from "react";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <button type="submit" onClick={navigateToCart}>
      Go to list
    </button>
  );
}

export default CartButton;
