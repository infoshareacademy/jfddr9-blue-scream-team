import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tile from "../components/Tile";
import HomeButton from "../components/HomeButton";
import { useState } from "react";
import { db } from "../api/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const cartRef = collection(db, "TravelPlans");

export function Cart() {
  const auth = getAuth();
  const navigate = useNavigate();
  const storedAttractions = useSelector((state) => state.cartReducer.cart);

  const [travelName, setTravelName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const travelData = {
      travelName,
      uid: auth.currentUser.uid,
      city: "",
      attraction: storedAttractions,
    };

    addDoc(cartRef, travelData)
      .then(() => {
        alert("Dodano do bazy podróży");
        setTravelName("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(storedAttractions);
  return (
    <div>
      <h1>My travel list</h1>
      <div>
        <Container className="container">
          <Row className="insiderow">
            {storedAttractions.map((item) => {
              return (
                <Col className="colhome">
                  <Card body style={{ width: "400px" }}>
                    {item.attraction.name}
                    <img
                      src={item.attraction.preview.source}
                      onClick={() => navigate(`/attraction/${item.id}`)}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <HomeButton />
        <form id="form_div">
          <input
            type="text"
            value={travelName}
            onChange={(e) => setTravelName(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Zapisz podróż
          </button>
        </form>
      </div>
    </div>
  );
}
