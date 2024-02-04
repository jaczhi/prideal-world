import "./App.css";
import { useNavigate } from "react-router-dom";

import scenario1 from "./assets/img/scenario1.png";
import scenario2 from "./assets/img/scenario2.png";
import scenario3 from "./assets/img/scenario3.png";
import scenario4 from "./assets/img/scenario4.png";

function App() {
  const navigate = useNavigate();

  /*return (
    <>
      <Button onClick={() => {navigate("/scenario1")}}>Scenario 1</Button>
      <br />
      <Button onClick={() => {navigate("/scenario2")}}>Scenario 2</Button>
      <br />
      <Button onClick={() => {navigate("/scenario3")}}>Scenario 3</Button>
      <br />
      <Button onClick={() => {navigate("/scenario4")}}>Scenario 4</Button>
      <br />
    </>
  );*/

  return (
    <div className="container">
      {/* Header */}
      <div className="header">PRideal World</div>

      {/* Grid Container */}
      <div className="grid-container">
        <div className="image-container" onClick={() => {navigate("/scenario1")}}>
          <img
            src={scenario1}
            width={500}
            height={250}
            className="scenario-image"
          />
        </div>
        <div className="image-container" onClick={() => {navigate("/scenario2")}}>
          <img
            src={scenario2}
            width={500}
            height={250}
            className="scenario-image"
          />
        </div>
        <div className="image-container" onClick={() => {navigate("/scenario3")}}>
          <img
            src={scenario3}
            width={500}
            height={250}
            className="scenario-image"
          />
        </div>
        <div className="image-container" onClick={() => {navigate("/scenario4")}}>
          <img
            src={scenario4}
            width={500}
            height={250}
            className="scenario-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
