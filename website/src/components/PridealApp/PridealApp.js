import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./PridealApp.css";
import RatingGrid from "../RatingGrid/RatingGrid";
import LLMTextInput from "../LLMTextInput/LLMTextInput";
import Typewriter from "../Typewriter/Typewriter";
import PridealScene from "../PridealScene/PridealScene";

function PridealApp({ gameDataPath, modelPath, initialLightLoc }) {
  const [gameState, setGameState] = useState(-1);
  const [gameData, setGameData] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [dialog, setDialog] = useState("");
  const [rating, setRating] = useState(-1);
  const [currentText, setCurrentText] = useState("");
  const [cameraLoc, setCameraLoc] = useState(initialLightLoc);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [doneWithInteraction, setDoneWithInteraction] = useState(false);
  const [llmPrompt, setLlmPrompt] = useState("");

  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    const response = await fetch(gameDataPath);
    const jsonData = await response.json();
    if (!jsonData.length) return;
    setGameData(jsonData);
    setGameState(0);
  };

  useEffect(() => {
    if (gameState < 0) return;
    if (gameState >= gameData.length) return;
    if (gameData[gameState].type === "dialog") {
      setRating(-1); // Reset the rating
      setShowOverlay(false);
      setDialog(
        `${gameData[gameState].actor}: ${gameData[gameState].dialog}`
      );
    } else if (gameData[gameState].type === "interact") {
      setShowOverlay(true);
      setCurrentText(gameData[gameState].instructions);
      setDoneWithInteraction(false);
      setLlmPrompt(gameData[gameState].llmPrompt);
      /* TODO: use correctRatings properties in actual game logic */
    }
    setCameraLoc(gameData[gameState].cameraLoc);
    setCameraRotation(gameData[gameState].cameraRotation);
  }, [gameState]);

  const onRating = (score) => {
    setRating(score);
  };

  const onTextGeneration = (text) => {
    setCurrentText(text);
    setTimeout(() => {
      setDoneWithInteraction(true);
    }, 2000);
  };

  if (gameState < 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      {showOverlay ? (
        <div className="overlay">
          <div className="dialogue">
            <Typewriter text={currentText} delay={5} />
          </div>

          {doneWithInteraction ? (
            <button
              onClick={() => {
                setGameState(gameState + 1);
              }}
            >
              Continue
            </button>
          ) : (
            <>
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
                <LLMTextInput
                  rating={rating}
                  onTextGeneration={onTextGeneration}
                  llmPrompt={llmPrompt}
                />
              </motion.div>
            </>
          )}
        </div>
      ) : (
        <div
          className="dialogFullscreen"
          onClick={() => {
            setGameState(gameState + 1);
          }}
        >
          <h2 style={{ color: "white" }}>{dialog}</h2>
        </div>
      )}
      <div className="backgroundClick" />
      <PridealScene
        modelPath={modelPath}
        initialLightLoc={initialLightLoc}
        cameraLoc={cameraLoc}
        cameraRotation={cameraRotation}
        className="topcanvas"
      />{" "}
    </div>
  );
}

export default PridealApp;
