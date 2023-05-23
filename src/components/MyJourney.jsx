import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../api/firebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tile from "./Tile";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MultiMap from "./MultiMap";
import BookingForm from "./BookingForm";

function MyJourney() {
  const navigate = useNavigate();
  const citiesCollection = collection(db, "TravelPlans");

  const { id } = useParams();

  const [city, setCity] = useState(null);

  const getCity = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(citiesCollection, (querySnapshot) => {
      const cities = getCity(querySnapshot).find((item) => {
        return item.id == id;
      });
      setCity(cities);
    });
  }, []);

  if (!city) {
    return <div>Loading....</div>;
  }
  const coordinates = city.attraction.map((item) => {
    return {
      lat: item.attraction.point.lat,
      lng: item.attraction.point.lon,
    };
  });
  console.log(coordinates);

  const handleUpdate = async (id) => {
    const docRef = doc(db, "TravelPlans", city.id);
    await updateDoc(docRef, {
      ...city,
      attraction: city.attraction.filter((item) => item.id !== id),
    });

    // setDraftId(null);
  };
  console.log(city);
  return (
    <div>
      <h1>MyJourney</h1>
      <Container className="container">
        <Row className="insiderow">
          {city.attraction.map((item) => {
            return (
              <Col className="colhome">
                <Card body style={{ width: "400px" }}>
                  {item.attraction.name}
                  <img
                    src={item.attraction.preview.source}
                    onClick={() => navigate(`/attraction/${item.id}`)}
                  />
                  <button onClick={() => handleUpdate(item.id)}>
                    Usuń z listy
                  </button>
                </Card>
              </Col>
            );
          })}
        </Row>
        <MultiMap coordinates={coordinates} />
      </Container>
    </div>
  );
}

export default MyJourney;
