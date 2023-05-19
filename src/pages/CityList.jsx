import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../api/firebase";

function CityList() {
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
      <ol>
        <h1>Moja lista miast</h1>
        <li>
          <p>Tu bedzie nazwa maista- pobrana?</p>
          <button type="submit">Usuń</button>
        </li>
      </ol>
    </div>
  );
}

export default CityList;
