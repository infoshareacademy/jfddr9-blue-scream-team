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
import CityListButton from "../components/ListButton";

const cartRef = collection(db, "TravelPlans");

export function Cart() {
  const auth = getAuth();
  console.log(auth);
  const storedAttractions = useSelector((state) => state.cartReducer.cart);
  console.log(storedAttractions);

  const [travelName, setTravelName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const travelData = {
      travelName,
      uid: auth.currentUser.uid,
      city: "",
      attraction: storedAttractions,
    };

    addDoc(cartRef, travelData);
    // .then(() => {
    //   alert("Dodano do bazy podróży");
    //   setTravelName("");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  return (
    <div className="traveltitle">
      <h1>MY TRAVEL LIST</h1>
      <div>
        <Container className="container">
          <Row className="insiderow">
            {storedAttractions.map((id) => {
              return (
                <Col className="colhome">
                  <Tile id={id} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <HomeButton />
        <CityListButton />
        <form id="form_div">
          <div className="traveldiv">
<input className="input"
            type="text"
            value={travelName}
            onChange={(e) => setTravelName(e.target.value)}
          />
          <button className="firstbutton" type="submit" onClick={handleSubmit}>
            Save Trip
          </button>

          </div>
          
        </form>
      </div>
    </div>
  );
}
