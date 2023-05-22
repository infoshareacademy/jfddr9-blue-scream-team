import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

//to trzeba będzie ostylować
const AnyReactComponent = ({ text }) => (
  <div style={{ backgroundColor: "red", width: "100px", height: "30px" }}>
    {text}
  </div>
);

export default function MultiMap({ coordinates }) {
  const points = {
    lat: [],
    lng: [],
  };

  coordinates.map((l) => {
    points.lat.push(Number(l.lat));
    points.lng.push(Number(l.lng));
  });

  const averageLng = (Math.max(...points.lng) + Math.min(...points.lng)) / 2;
  const averageLat = (Math.max(...points.lat) + Math.min(...points.lat)) / 2;

  const [userZoom, setUserZoom] = useState(8);

  const [center, setCenter] = useState({
    //it will be overridden at onLoad
    lat: averageLat,
    lng: averageLng,
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCFOqKuCS4ibsJEhOTwII_-DwXpPvzBQEw" }}
        defaultCenter={center}
        defaultZoom={11}
      >
        {coordinates.map((item) => {
          return (
            <AnyReactComponent lat={item.lat} lng={item.lng} text="My Marker" />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
