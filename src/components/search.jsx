import styled from "styled-components";
import useFetch from "react-fetch-hook";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAttraction, clearAttraction } from "../store/attractionsSlice";
import { useSelector } from "react-redux";

const SearchText = styled.div`
  display: flex;
  max-width: 1920px;
  height: 150px;
  padding: 20px;

  justify-content: center;
  align-items: center;
  font-size: 45px;
`;

export function Search() {
  const storedAttractions = useSelector(
    (state) => state.attractionsReducer.attractions
  );
  const [index, setIndex] = useState(0);
  const [city, setCity] = useState(sessionStorage.getItem("city") || "");
  const [cordinate, setCordinate] = useState({ lat: 0, lon: 0 });
  const [attractions, setAttractions] = useState([]);
  const dispatch = useDispatch();
  const apiKey = "5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49"; // Wpisz swój klucz API

  const apiUrl = `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${apiKey}&name=gdynia`;
  const apiTripUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&lon=44&lat=44&apikey=5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49`;
  const attraction = `https://api.opentripmap.com/0.1/en/places/xid/1812869?apikey=5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49`;
  const { isLoading, data, error } = useFetch(attraction);

  useEffect(() => {
    city && handleClick();
  }, []);

  useEffect(() => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&lon=${cordinate.lon}&lat=${cordinate.lat}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const ids = data.features.map(({ id }) => id);
        setAttractions(ids.splice(0, 30));
        dispatch(addAttraction(ids.splice(0, 30)));
      });
  }, [cordinate.lat]);

  const handleClick = (e) => {
    e && e.preventDefault();
    sessionStorage.setItem("city", city);
    dispatch(clearAttraction());
    fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?apikey=${apiKey}&name=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCordinate({ lat: data.lat, lon: data.lon });
        setIndex(1);
      });
  };

  return (
    <SearchText>
      <form onSubmit={handleClick}>
        <input
          onChange={(e) => setCity(e.target.value)}
          className="input"
          placeholder="Search places here..."
          value={city}
        ></input>
        <button className="firstbutton">Search</button>
      </form>
    </SearchText>
  );
}
