import Card from "react-bootstrap/Card";


function SingleBook({ changeSelectedBook, selectedBook, book }) {
  return (
    <>
      <Card
        className="book-cover d-flex flex-column"
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
export default SingleBook;
