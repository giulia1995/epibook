import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate()

  return (
    <>
      <Card
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? '3px solid red' : 'none',
          
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black', fontWeight:"bold" }}>{book.title}</Card.Title>
          <Button
            className="btn btn-warning w-100 mt-2"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            Scopri di più
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook

