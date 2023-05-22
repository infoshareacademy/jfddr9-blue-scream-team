import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";
import { Collapse } from "@mui/material";
import { useIsInViewport } from "./utils/useIsInViewport";
import { AttractionCard } from "./attractionCard";
import ConfirmationModal from "./ConfirmationModal";
import { useSelector } from "react-redux";

function Tile({ id, isButtonVisible = true }) {
  const [open, setOpen] = useState(false);
  const elementRef = useRef(null);
  const isInViewport = useIsInViewport(elementRef);
  const storedAttractions = useSelector((state) => state.cartReducer.cart);

  return (
    <>
      <div style={{ minHeight: "150px" }} ref={elementRef}>
        <Collapse in={isInViewport} dimension="width">
          {isInViewport && (
            <AttractionCard
              id={id}
              isButtonVisible={isButtonVisible}
              isAdd={storedAttractions.includes(id)}
            />
          )}
        </Collapse>
      </div>
    </>
  );
}

export default Tile;
