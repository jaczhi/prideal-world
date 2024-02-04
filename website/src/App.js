import "./App.css";
import { useNavigate } from "react-router-dom";

import scenario1 from "./assets/img/scenario1.png";
import scenario2 from "./assets/img/scenario2.png";
import scenario3 from "./assets/img/scenario3.png";
import scenario4 from "./assets/img/scenario4.png";

import unicorn from "./assets/img/unicorn_button.png";
import unicornHover from "./assets/img/unicorn_button_hover.png";

function App() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header */}
      <div className="header">PRideal World</div>

      <div className="image-box">
        <div class="imageInn">
          <img src={unicorn} alt="Default Image" width={120} height={257} />
        </div>
        <div class="hover-img">
          <img src={unicornHover} alt="Profile Image" width={120} height={257} />
        </div>
      </div>

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
