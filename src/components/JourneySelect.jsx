import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { onSnapshot, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import { useNavigate } from "react-router-dom";

const citiesCollection = collection(db, "TravelPlans");

export const JourneySelect = ({ attraction }) => {
  const navigate = useNavigate();

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
  const options = cityList.map((item) => {
    return { value: item.id, label: item.travelName };
  });

  const handleChange = (event) => {
    console.log(event);
    const journey = cityList.find((item) => {
      return item.id == event.value;
    });
    if (
      journey.attraction.find((item) => {
        return item.xid == attraction.xid;
      })
    ) {
      alert("Ta atrakcja jest już dodana do Twojej listy podróży!");
      return;
    }
    const docRef = doc(db, "TravelPlans", event.value);
    updateDoc(docRef, {
      ...journey,
      attraction: [...journey.attraction, attraction],
    }).then(() => {
      alert("Dodano do listy podróży");
      navigate(0);
    });
  };

  return (
    <Select
      placeholder={"Dodaj do podróży"}
      onChange={handleChange}
      options={options}
    />
  );
};
