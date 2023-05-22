import React, { useState, useEffect } from "react";
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";

function CityList() {
  const navigate = useNavigate();
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
      setCityList(cities);
    });
  }, []);

  return (
    <div>
      <h1>Moja lista miast</h1>
      <div>
        <ol style={{ listStyle: "decimal" }}>
          {cityList.map((city) => (
            <li
              onClick={() => navigate(`/journey/${city.id}`)}
              key={city.id}
              style={{
                display: "list-item",
                listStylePosition: "inside",
                listStyle: "decimal",
              }}
            >
              <div>
                <p>{city.travelName}</p>
                <button>Usuń</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <ol>
        <h1>List of places</h1>
        <li>
          <p>Tu bedzie nazwa maista- pobrana?</p>
          <button type="submit">Remove</button>
          <HomeButton />
        </li>
      </ol>
    </div>
  );
}

export default CityList;
