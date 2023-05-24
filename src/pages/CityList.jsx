import React, { useState, useEffect } from "react";
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
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

  const handleDelete = (id) => {
    const docRef = doc(db, "TravelPlans", id);
    deleteDoc(docRef);
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
      <h1>List of places</h1>
      <div>
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
                <button
                  className="firstbutton"
                  onClick={() => navigate(`/journey/${city.id}`)}
                >
                  View
                </button>
                <button
                  className="firstbutton"
                  onClick={() => handleDelete(city.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <ol>
        <li>
          <HomeButton />
        </li>
      </ol>
    </div>
  );
}

export default CityList;
