import { Row,Col } from "react-bootstrap";
import booksdata from "../data/romance.json";
import Card from 'react-bootstrap/Card';

function AllTheBooks(){
    return (
        <Row className="g-2">
        {booksdata.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin}>
              <Card className="book-cover d-flex flex-column">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    )
}
export default AllTheBooks;