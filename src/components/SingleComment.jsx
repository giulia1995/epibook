import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIwNDNmNGNlZjA0ODAwMTgxZGQ1Y2IiLCJpYXQiOjE3MDkxNTQzMjQsImV4cCI6MTcxMDM2MzkyNH0.waRKLVXB1cGW_CaVCOx2O1hQ6x7R7w7hkxLCcCue5YM",
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item data-testid="single-comment" className='d-flex justify-content-between text-start'>
      {comment.comment}<br/>valutazione:{comment.rate}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment