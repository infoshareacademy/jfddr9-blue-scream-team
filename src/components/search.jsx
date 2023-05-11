import styled from "styled-components";
import useFetch from "react-fetch-hook";

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
  const apiKey = '5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49'; // Wpisz swój klucz API

  const apiUrl = `http://api.opentripmap.com/0.1/en/places/geoname?apikey=${apiKey}&name=gdynia`;
  const apiTripUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&lon=44&lat=44&apikey=5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49`;
  const attraction = `https://api.opentripmap.com/0.1/en/places/xid/1812869?apikey=5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49`;
  const { isLoading, data, error } = useFetch(
    attraction
  );
  return (
    <SearchText>
      <input
        className="input"
        placeholder="Wpisz nazwę miasta, które Cię interesuje"
      ></input>
      <button className="firstbutton">Search</button>
    </SearchText>
  );
}
