import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { onSnapshot, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";

const citiesCollection = collection(db, "TravelPlans");

export const JourneySelect = ({ attraction }) => {
  const navigate = useNavigate();
  const auth = getAuth();
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
      toast("This attraction is already added to your list!");
      return;
    }
    const docRef = doc(db, "TravelPlans", event.value);
    updateDoc(docRef, {
      ...journey,
      attraction: [...journey.attraction, attraction],
    }).then(() => {
      toast("Added to list", { toastId: "select success!" });
      setTimeout(() => {
        navigate(0);
      }, 3000);
    });
  };

  return (
    <Select
      placeholder={"Add to journey"}
      onChange={handleChange}
      options={options}
    />
  );
};
