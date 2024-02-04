import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal/Modal";

import scenario1 from "./assets/img/scenario1.png";
import scenario2 from "./assets/img/scenario2.png";
import scenario3 from "./assets/img/scenario3.png";
import scenario4 from "./assets/img/scenario4.png";

import unicorn from "./assets/img/unicorn_button.png";
import unicornHover from "./assets/img/unicorn_button_hover.png";

function App() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">PRideal World</div>

      <div
        className="image-box"
        onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
      >
        <div class="imageInn">
          <img src={unicorn} alt="Default Image" width={120} height={257} />
        </div>
        <div class="hover-img">
          <img
            src={unicornHover}
            alt="Profile Image"
            width={120}
            height={257}
          />
        </div>
      </div>

      {/* Modal animation sourced from Fireship: https://www.youtube.com/watch?v=SuqU904ZHA4 */}
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={() => setModalOpen(false)}
          >
            <h1>Hello hello</h1>
            <div>Test</div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Grid Container */}
      <div className="grid-container">
        <div
          className="image-container"
          onClick={() => {
            navigate("/scenario1");
          }}
        >
          <img
            src={scenario1}
            width={500}
            height={250}
            className="scenario-image"
          />
        </div>
        <div
          className="image-container"
          onClick={() => {
            navigate("/scenario2");
          }}
        >
          <img
            src={scenario2}
            width={500}
            height={250}
            className="scenario-image"
          />
        </div>
        <div
          className="image-container"
          onClick={() => {
            navigate("/scenario3");
          }}
        >
          <img
            src={scenario3}
            width={500}
            height={250}
            className="scenario-image"
          />
        </div>
        <div
          className="image-container"
          onClick={() => {
            navigate("/scenario4");
          }}
        >
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
