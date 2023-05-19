import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../api/firebase";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tile from "./Tile";

function MyJourney() {
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

  return (
    <div>
      <h1>MyJourney</h1>
      <Container className="container">
        <Row className="insiderow">
          {city.attraction.map((id) => {
            return (
              <Col className="colhome">
                <Tile id={id} isButtonVisible={false} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default MyJourney;
