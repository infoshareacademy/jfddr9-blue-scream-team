import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";
import { Collapse } from "@mui/material";
import { useIsInViewport } from "./utils/useIsInViewport";
import { AttractionCard } from "./attractionCard";
import ConfirmationModal from "./ConfirmationModal";

function Tile({ id }) {
  const [open, setOpen] = useState(false);
  const elementRef = useRef(null);
  const isInViewport = useIsInViewport(elementRef);
  return (
    <>
      <div style={{ minHeight: "150px" }} ref={elementRef}>
        <Collapse in={isInViewport} dimension="width">
          
          {isInViewport && <AttractionCard id={id} />}
        </Collapse>
        <ConfirmationModal />
      </div>
    </>
  );
}

export default Tile;
