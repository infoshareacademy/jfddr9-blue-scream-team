import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tile from "../components/Tile";
import HomeButton from "../components/HomeButton";

export function Cart() {
  const storedAttractions = useSelector((state) => state.cartReducer.cart);
  console.log(storedAttractions);
  return (
    <div>
      <h1>My travel list</h1>
      <div>
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
        <HomeButton />
        <form>
          <input type="text" />
          <button type="submit">Zapisz podróż</button>
        </form>
      </div>
    </div>
  );
}
