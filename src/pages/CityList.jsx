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
import { getAuth } from "@firebase/auth";
import { toast } from "react-toastify";

function CityList() {
  const auth = getAuth();
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
    deleteDoc(docRef)
      .then(() => {
        toast("Trip removed", { type: "success" });
      })
      .catch(() => {
        toast("Failed action", { type: "error" });
      });
  };

  useEffect(() => {
    onSnapshot(citiesCollection, (querySnapshot) => {
      const cities = getCity(querySnapshot);
      setCityList(cities.filter((item) => item.uid == auth.currentUser.uid));
    });
  }, []);
  console.log(cityList);

  return (
    <div>
      <p class="travellist">List of places</p>
      <div>
        <ol style={{ listStyle: "decimal" }}>
          {cityList.map((city) => (
            <li
              key={city.id}
              style={{
                display: "list-item",
                listStylePosition: "inside",
                listStyle: "decimal",
                backgroundColor: "aliceblue",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <p className="travelNameP">{city.travelName}</p>
                <div className="buttongroup">
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
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <HomeButton />
      </div>
    </div>
  );
}

export default CityList;
