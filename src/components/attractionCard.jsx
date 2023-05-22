import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef, useEffect } from "react";
import { Collapse } from "@mui/material";
import { useIsInViewport } from "./utils/useIsInViewport";
import { addToCart } from "../store/cartSlice";
const apiKey = "5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

export function AttractionCard({ id, isButtonVisible, isAdd }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [attraction, setAttraction] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAttraction(data);
      });
  }, []);

  if (!attraction || !attraction.preview || !attraction.preview.source) {
    return null;
  }
  return (
    <>
      <div id="example-collapse-text">
        {attraction && (
          <Card body style={{ width: "400px" }}>
            {attraction.name}
            <img
              src={attraction.preview.source}
              onClick={() => navigate(`/attraction/${id}`)}
            />
          </Card>
        )}
        {isButtonVisible && (
          <ConfirmationModal id={id} isAdd={isAdd} attraction={attraction} />
        )}
      </div>
    </>
  );
}
