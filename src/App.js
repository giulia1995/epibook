import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Myfooter from "./components/Myfooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import romance from "./data/romance.json";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <Container>
        <AllTheBooks books={romance} />
      </Container>
      <Myfooter />
    </div>
  );
}

export default App;
