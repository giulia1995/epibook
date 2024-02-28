import Alert from 'react-bootstrap/Alert';

function MyAlert() {
  return (
    <Alert variant="warning">
      <Alert.Heading>Welcome in Epibooks!</Alert.Heading>
      <p>
        Search your best book, and choose it!
      </p>
      <hr />
    </Alert>
  );
}

export default MyAlert;