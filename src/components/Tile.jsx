import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";
import { Collapse } from "@mui/material";
import { useIsInViewport } from "./utils/useIsInViewport";
import { AttractionCard } from "./attractionCard";
import ConfirmationModal from "./ConfirmationModal";
import { useSelector } from "react-redux";

function Tile({ id, isButtonVisible = true }) {
  const [attraction, setAttraction] = useState(null);
  const elementRef = useRef(null);
  const isInViewport = useIsInViewport(elementRef);
  const storedAttractions = useSelector((state) => state.cartReducer.cart);

  return (
    <>
      <div
        ref={elementRef}
        style={{
          height:
            attraction == null
              ? "500px"
              : attraction?.preview
              ? "500px"
              : "2px",
        }}
      >
        <Collapse in={isInViewport} dimension="width">
          {isInViewport && (
            <AttractionCard
              id={id}
              isButtonVisible={isButtonVisible}
              isAdd={storedAttractions.find((item) => {
                return item.id == id;
              })}
              attraction={attraction}
              setAttraction={setAttraction}
            />
          )}
        </Collapse>
      </div>
    </>
  );
}

export default Tile;
