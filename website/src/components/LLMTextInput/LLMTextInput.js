import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./llmtextinput.css";
import { CircularProgress } from "@mui/material";

function LLMTextInput({ rating, onTextGeneration }) {
  const [llmText, setLlmText] = useState("");
  const [ratingText, setRatingText] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    switch (rating) {
        case 0:
          console.log("Good Good");
          setRatingText("Good Good");
          break;
        case 1:
          console.log("Good Neutral");
          setRatingText("Good Neutral");
          break;
        case 2:
          console.log("Good Bad");
          setRatingText("Good Bad");
          break;
        case 3:
          console.log("Neutral Good");
          setRatingText("Neutral Good");
          break;
        case 4:
          console.log("Neutral Neutral");
          setRatingText("Neutral Neutral");
          break;
        case 5:
          console.log("Neutral Bad");
          setRatingText("Neutral Bad");
          break;
        case 6:
          console.log("Bad Good");
          setRatingText("Bad Good");
          break;
        case 7:
          console.log("Bad Neutral");
          setRatingText("Bad Neutral");
          break;
        case 8:
        default: 
            console.log("Bad Bad");
            setRatingText("Good Bad");
            break;
      }
  }, [rating]);

  const onTextSubmit = () => {
    console.log(llmText);

    isLoading(true);
    fetch("http://127.0.0.1:5000/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: llmText }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        onTextGeneration(data);
        isLoading(false);
      }); // The capital of Germany is Berlin.
  };

  return (
    <div className="llm-text-container">
      {<div>Why did you choose {ratingText}?</div>}
      <div className="llm-input-container">
        <input
          className="llm-text-input"
          placeholder="I chose this because..."
          type="text"
          onChange={(event) => setLlmText(event.target.value)}
        ></input>
        {!loading ? (
          <SendIcon
            fontSize="large"
            className="llm-text-submit"
            onClick={onTextSubmit}
          />
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
    </div>
  );
}

export default LLMTextInput;
