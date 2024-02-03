import ThreeCube from "../../components/ThreeCube/ThreeCube";
import { motion } from "framer-motion";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../scenarios.css";
import RatingGrid from "../../components/RatingGrid/RatingGrid";
import LLMTextInput from "../../components/LLMTextInput/LLMTextInput";
import Typewriter from "../../components/Typewriter/Typewriter";

function Scenario1() {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(-1);
  const [currentText, setCurrentText] = useState(
    "Hello hello hello"
  );

  const handleClose = () => setShow(false);

  const onRating = (score) => {
    setRating(score);
  };

  const onTextGeneration = (text) => {
    setCurrentText(text);
  };

  return (
    <div className="App">
      <div className="overlay">
        <div className="dialogue">
          <Typewriter text={currentText} delay={50} />
        </div>

        <motion.div
          className="rating-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          variants={{
            initial: {
              opacity: 0,
              x: -50,
            },
            animate: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <RatingGrid onRating={onRating} />
        </motion.div>

        <motion.div
          className="llm-text"
          initial="initial"
          animate={rating >= 0 && rating <= 8 ? "animate" : "initial"}
          transition={{ duration: 0.5 }}
          variants={{
            initial: {
              opacity: 0,
              x: 50,
            },
            animate: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <LLMTextInput rating={rating} onTextGeneration={onTextGeneration} />
        </motion.div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ThreeCube className="topcanvas" />
    </div>
  );
}

export default Scenario1;
