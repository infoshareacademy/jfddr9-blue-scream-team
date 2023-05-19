import React, { useState, useEffect } from "react";
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../api/firebase";
import { useNavigate } from "react-router-dom";

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
  console.log(cityList);

  return (
    <div>
      <h1>Moja lista miast</h1>
      <div onClick={() => navigate(`/travel/${city.id}`)}>
        <ol style={{ listStyle: "decimal" }}>
          {cityList.map((city) => (
            <li
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
    </div>
  );
}

export default CityList;
