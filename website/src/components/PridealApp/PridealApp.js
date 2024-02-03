import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./PridealApp.css";
import RatingGrid from "../RatingGrid/RatingGrid";
import LLMTextInput from "../LLMTextInput/LLMTextInput";
import Typewriter from "../Typewriter/Typewriter";
import PridealScene from "../PridealScene/PridealScene";

function PridealApp() {
  const [rating, setRating] = useState(-1);
  const [currentText, setCurrentText] = useState(
    "Please rate the below dialogue snippet on [person]'s intention and the effect on [person]."
  );

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

      <PridealScene className="topcanvas" />
    </div>
  );
}

export default PridealApp;
