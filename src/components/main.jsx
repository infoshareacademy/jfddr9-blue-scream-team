import styled from "styled-components";
const MainText = styled.div`
  display: flex;
  max-width: 1920px;
  height: 150px;
  padding: 20px;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
  font-size: 45px;
`;

export function Main() {
  return <MainText>Main</MainText>;
}
