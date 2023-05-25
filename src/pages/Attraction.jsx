import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const apiKey = "5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49";
import SimpleMap from "../components/SimpleMap";
import { JourneySelect } from "../components/JourneySelect";

function Attraction() {
  const navigate = useNavigate();
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

  if (!attraction) {
    return <div>Loading....</div>;
  }

  console.log(attraction);
  return (
    <div>
      <JourneySelect attraction={attraction} />
      <div className="backbutton">
        <button className="firstbutton" onClick={() => history.back()}>
          Back
        </button>
      </div>
      <div className="attractionText">
        <img
          src={attraction.preview.source}
          style={{ height: "500px", width: "500px" }}
        />
        <div className="textOnRight">
          {attraction.name}
          <div>
            {attraction.address.pedestrian +
              " " +
              attraction.address.house_number}
          </div>
          <div>
            {attraction.address.postcode + " " + attraction.address.state}
          </div>
          <div>{attraction.address.country}</div>
        </div>
      </div>

      {attraction.wikipedia_extracts && (
        <div
          className="textOnRight"
          dangerouslySetInnerHTML={{
            __html: attraction.wikipedia_extracts.html,
          }}
        ></div>
      )}
      {attraction.url && (
        <div>
          <a href={attraction.url}>
            <button>Info</button>
          </a>
        </div>
      )}
      <SimpleMap lat={attraction.point.lat} lng={attraction.point.lon} />
    </div>
  );
}

export default Attraction;
