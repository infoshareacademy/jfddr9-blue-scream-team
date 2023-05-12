import styled from "styled-components";
import useFetch from "react-fetch-hook";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAttraction } from "../store/attractionsSlice";
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
  const [city, setCity] = useState("");
  const [cordinate, setCordinate] = useState({ lat: 0, lon: 0 });
  const [attractions, setAttractions] = useState([]);
  const dispatch = useDispatch();
  const apiKey = "5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49"; // Wpisz swój klucz API

  const apiUrl = `http://api.opentripmap.com/0.1/en/places/geoname?apikey=${apiKey}&name=gdynia`;
  const apiTripUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&lon=44&lat=44&apikey=5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49`;
  const attraction = `https://api.opentripmap.com/0.1/en/places/xid/1812869?apikey=5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49`;
  const { isLoading, data, error } = useFetch(attraction);

  useEffect(() => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&lon=${cordinate.lon}&lat=${cordinate.lat}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const ids = data.features.map(({ id }) => id);
        setAttractions(ids.splice(0, 99));
        console.log(attractions);
      });
  }, [cordinate.lat]);
  const handleClick = () => {
    fetch(
      `http://api.opentripmap.com/0.1/en/places/geoname?apikey=${apiKey}&name=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCordinate({ lat: data.lat, lon: data.lon });
        setIndex(1);
      });
  };

  useEffect(() => {
    if (cordinate.lat) {
      fetch(
        `https://api.opentripmap.com/0.1/en/places/xid/${attractions[index]}?apikey=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(storedAttractions.length);
          data.preview &&
            storedAttractions.length < 10 &&
            dispatch(addAttraction(data));
          setInterval(() => {
            if (index < attractions.length) {
              setIndex(index + 1);
            }
          }, 3000);
        });
    }
  }, [index]);
  // const fetchAtraction = () => {
  //   fetch(
  //     `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&lon=${cordinate.lon}&lat=${cordinate.lat}&apikey=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAttractions(data.features.map(({ id }) => id));
  //       console.log(attractions);
  //     });
  // };

  // const fetchFullAttraction = () => {
  //   attractions.map((id) => {
  //     fetch(
  //       `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=${apiKey}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         dispatch(addAttraction(data));
  //       });
  //   });
  // };

  return (
    <SearchText>
      <input
        onChange={(e) => setCity(e.target.value)}
        className="input"
        placeholder="Wpisz nazwę miasta, które Cię interesuje"
      ></input>
      <button onClick={handleClick} className="firstbutton">
        Search
      </button>
    </SearchText>
  );
}
