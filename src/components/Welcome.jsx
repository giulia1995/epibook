import { Container} from "react-bootstrap";
import MyAlert from "./MyAlert";

function Welcome(){
    return (
        <Container className="pt-5">
            <MyAlert/>
        </Container>
    )
}
export default Welcome;