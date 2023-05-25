import React from "react";
import GoogleMapReact from "google-map-react";

//to trzeba będzie ostylować
const AnyReactComponent = ({ text }) => <div className="dot1">{text}</div>;

export default function SimpleMap({ lat, lng }) {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCFOqKuCS4ibsJEhOTwII_-DwXpPvzBQEw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
}
