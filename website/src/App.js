import "./App.css";
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';


function App() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => {navigate("/scenario1")}}>Scenario 1</Button>
      <br />
      <Button onClick={() => {navigate("/scenario2")}}>Scenario 2</Button>
      <br />
      <Button onClick={() => {navigate("/scenario3")}}>Scenario 3</Button>
      <br />
    </>
  );
}

export default App;
