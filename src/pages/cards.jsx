import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AutoLayout() {
  return (
    <Container className='container'>
      <Row className='insiderow' >
        <Col className='colhome'>1 of 3</Col>
        <Col className='colhome'>2 of 3</Col>
        <Col className='colhome'>3 of 3</Col>
        <Col className='colhome'>1 of 3</Col>
        <Col className='colhome'>2 of 3</Col>
        <Col className='colhome'>3 of 3</Col>
        <Col className='colhome'>1 of 3</Col>
        <Col className='colhome'>2 of 3</Col>
        <Col className='colhome'>3 of 3</Col>
        <Col className='colhome'>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayout;