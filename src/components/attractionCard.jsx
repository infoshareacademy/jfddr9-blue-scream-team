import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef, useEffect } from "react";
import { Collapse, Divider } from "@mui/material";
import { useIsInViewport } from "./utils/useIsInViewport";
import { addToCart } from "../store/cartSlice";
const apiKey = "5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

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
  console.log(attraction);
  return (
    <>
      <div
        id="example-collapse-text"
        style={{ display: "flex", flexDirection: "column", height: "600px" }}
      >
        {attraction && (
          <Card
            body
            style={{
              width: "100%",
              padding: "0",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
          >
            <Row>
              <Col>
                <img
                  src={attraction.preview.source}
                  onClick={() => navigate(`/attraction/${id}`)}
                  style={{ height: "400px", width: "100%", objectFit: "cover" }}
                />
              </Col>

              <Col
                style={{
                  height: "400px",
                  display: "flex",
                  alignContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h2>{attraction.name}</h2>
                    <Divider></Divider>
                    <p>
                      {typeof attraction.wikipedia_extracts?.text == "string"
                        ? attraction.wikipedia_extracts?.text
                            ?.toString()
                            .substring(0, 600) + "..."
                        : ""}
                    </p>
                  </div>

                  {isButtonVisible && (
                    <ConfirmationModal
                      id={id}
                      isAdd={isAdd}
                      attraction={attraction}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Card>
        )}
      </div>
    </>
  );
}
