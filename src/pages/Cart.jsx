import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tile from "../components/Tile";
import HomeButton from "../components/HomeButton";
import { useState, useEffect } from "react";
import { db } from "../api/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CityListButton from "../components/ListButton";
import ConfirmationModal from "../components/ConfirmationModal";
import { clearCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import { JourneySelect } from "../components/JourneySelect";

const cartRef = collection(db, "TravelPlans");

export function Cart() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  const storedAttractions = useSelector((state) => state.cartReducer.cart);

  const [travelName, setTravelName] = useState("");
  const citiesCollection = collection(db, "TravelPlans");

  const [cityList, setCityList] = useState([]);

  const getCity = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  useEffect(() => {
    onSnapshot(citiesCollection, (querySnapshot) => {
      const cities = getCity(querySnapshot);
      setCityList(cities.filter((item) => item.uid == auth.currentUser.uid));
    });
  }, []);
  console.log(cityList);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!storedAttractions.length) {
      toast("Please add at least one attraction", { type: "warning" });
      return;
    }
    if (!travelName) {
      toast("Trip name field is mandatory", { type: "warning" });
      return;
    }
    if (cityList.find((item) => item.travelName == travelName)) {
      toast("Travel name exsists", { type: "error" });
      return;
    }

    const travelData = {
      travelName,
      uid: auth.currentUser.uid,
      city: "",
      attraction: storedAttractions,
    };

    addDoc(cartRef, travelData)
      .then(() => {
        toast("Added to travel list");
        dispatch(clearCart());
        setTravelName("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(auth);

  return (
    <div className="traveltitle">
      <h1 className="travellist">My travel list</h1>
      <div>
        <Container className="wrapper">
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
                    <ConfirmationModal
                      id={item.id}
                      isAdd={true}
                      attraction={item.attraction}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <HomeButton />
        <CityListButton />
        {auth.currentUser ? (
          <form id="form_div">
            <div className="traveldiv">
              <input
                className="input"
                type="text"
                value={travelName}
                onChange={(e) => {
                  setTravelName(e.target.value);
                }}
              />
              <button
                className="firstbutton"
                type="submit"
                onClick={handleSubmit}
              >
                Save Trip
              </button>
            </div>
          </form>
        ) : (
          <div className="bottomtext2">
            Log in or register to save your trip!
          </div>
        )}
      </div>
    </div>
  );
}
