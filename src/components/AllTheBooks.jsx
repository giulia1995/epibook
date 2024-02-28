import { Col, Row } from 'react-bootstrap'
import romance from '../data/romance.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'

const AllTheBooks = ({ searchQuery }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Row>
      <Col md={8}>
        <Row className="g-2 mt-3">
          {romance
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Col>
              )
            })}
        </Row>
      </Col>
      <Col md={4} className="text-center overflow-auto" style={{height:"500px"}}>
        <CommentArea asin={selected} />
      </Col>
    </Row>
  )
}

export default AllTheBooks