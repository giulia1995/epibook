import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import fantasy from "../data/fantasy.json";

const BookDetails = () => {
  const params = useParams();
  const foundBook = fantasy.find((book) => book.asin === params.asin);

  return (
    <Container>
      <Row className="justify-content-between">
        <Col className="d-flex justify-content-between">
          <Card style={{ width: "20rem", marginBottom:"30px" }}>
            <Card.Img variant="top" src={foundBook.img} />
            <Card.Body>
              <Card.Title style={{ color: "black", fontWeight:"bold"}}>
                {foundBook.title}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <CommentArea asin={params.asin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
