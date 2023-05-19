import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const apiKey = "5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49";

function Attraction() {
  const { id } = useParams();

  const [attraction, setAttraction] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAttraction(data);
      });
  }, []);

  console.log(attraction);
  if (!attraction) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div>Attraction</div>
      <div>{attraction.name}</div>
    </div>
  );
}

export default Attraction;
