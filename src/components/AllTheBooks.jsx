import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";

const AllTheBooks=({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const changeSelectedBook = (asin) => {
    setSelectedBook(asin)};
    return (
      <>
        <Row>
          <Col>
            <Row className="mt-5">
              <Col xs={12} md={4} className="text-center">
                <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="Cerca un libro"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="g-2 mt-3">
              {books
                .filter((b) => b.title.toLowerCase().includes(searchQuery))
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedBook={selectedBook}
                      changeSelectedBook={changeSelectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </>
    )
};

export default AllTheBooks;
