import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../api/firebase";
import HomeButton from "../components/HomeButton";

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
