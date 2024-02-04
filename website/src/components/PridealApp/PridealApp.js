import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PridealApp.css";
import promptImg from "../../assets/img/prompt.png";
import RatingGrid from "../RatingGrid/RatingGrid";
import LLMTextInput from "../LLMTextInput/LLMTextInput";
import Typewriter from "../Typewriter/Typewriter";
import PridealScene from "../PridealScene/PridealScene";
import StaticRatingGrid from "../RatingGrid/StaticRatingGrid";

function PridealApp({ gameDataPath, modelPath, initialLightLoc }) {
  const [gameState, setGameState] = useState(-1);
  const [gameData, setGameData] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [dialog, setDialog] = useState("");
  const [rating, setRating] = useState(-1);
  const [correctRatings, setCorrectRatings] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [cameraLoc, setCameraLoc] = useState(initialLightLoc);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);
  const [doneWithInteraction, setDoneWithInteraction] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [llmPrompt, setLlmPrompt] = useState("");
  const navigate = useNavigate();

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
    if (gameState >= gameData.length) {
      navigate("/");
      return;
    }
    if (gameData[gameState].type === "dialog") {
      setRating(-1); // Reset the rating
      setShowOverlay(false);
      setDialog(`${gameData[gameState].actor}: ${gameData[gameState].dialog}`);
    } else if (gameData[gameState].type === "interact") {
      setShowOverlay(true);
      setCurrentText(gameData[gameState].instructions);
      setDoneWithInteraction(false);
      setLlmPrompt(gameData[gameState].llmPrompt);
      setCorrectRatings(gameData[gameState].correctRatings);
    }
    setCameraLoc(gameData[gameState].cameraLoc);
    setCameraRotation(gameData[gameState].cameraRotation);
  }, [gameState]);

  const onRating = (score) => {
    setRating(score);
  };

  const onTextGeneration = (text) => {
    setCurrentText(text);
    setDoneWithInteraction(true);
  };

  if (gameState < 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      {showOverlay ? (
        <div className="overlay">
          <div className="prompt">
            {!loadingResponse && (
              <img
                src={promptImg}
                width={72}
                height={115}
                className="prompt-image"
              />
            )}
            <Typewriter text={currentText} delay={5} />
          </div>

          {doneWithInteraction ? (
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
                <StaticRatingGrid
                  rating={rating}
                  correctArray={correctRatings}
                />
              </motion.div>
              <button
                onClick={() => {
                  setGameState(gameState + 1);
                }}
                className="continue-button"
              >
                Continue
              </button>
            </>
          ) : (
            <>
            <div className="dialogue">
            <span style={{whiteSpace: "pre-line"}} className="dialogue">{dialog}</span>
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
                <LLMTextInput
                  rating={rating}
                  onTextGeneration={onTextGeneration}
                  llmPrompt={llmPrompt}
                  loadingPrompt={setLoadingResponse}
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
          style={{ padding: "2rem" }}
        >
          <Typewriter className="dialogue" text={dialog} delay={15} />
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
