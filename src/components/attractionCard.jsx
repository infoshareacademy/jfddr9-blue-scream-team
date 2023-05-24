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

export function AttractionCard({
  id,
  isButtonVisible,
  isAdd,
  attraction,
  setAttraction,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      <div
        id="example-collapse-text"
        style={{ display: "flex", flexDirection: "column", height: "600px" }}
      >
        {attraction && (
          <Card body style={{ width: "400px", padding: "0" }}>
            <Card.Header>{attraction.name}</Card.Header>

            <img
              src={attraction.preview.source}
              onClick={() => navigate(`/attraction/${id}`)}
              style={{ height: "400px", width: "400px" }}
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
