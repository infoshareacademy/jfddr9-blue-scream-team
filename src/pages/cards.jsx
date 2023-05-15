import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import Tile from "../components/Tile";

function AutoLayout() {
  const storedAttractions = useSelector(
    (state) => state.attractionsReducer.attractions
  );
  console.log(storedAttractions);
  return (
    <Container className="container">
      <Row className="insiderow">
        {storedAttractions.map((id) => {
          return (
            <Col className="colhome">
              <Tile id={id} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AutoLayout;
