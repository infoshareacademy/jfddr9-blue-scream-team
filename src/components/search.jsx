import styled from "styled-components";
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