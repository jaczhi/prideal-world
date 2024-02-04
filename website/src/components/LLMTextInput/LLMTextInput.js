import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import loadingGif from "../../assets/gifs/loading.gif";
import "./llmtextinput.css";

function LLMTextInput({ rating, onTextGeneration, llmPrompt }) {
  const [llmText, setLlmText] = useState("");
  const [ratingText, setRatingText] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    switch (rating) {
      case 0:
        console.log("Good Effect, Good Intention");
        setRatingText("Good Effect, Good Intention");
        break;
      case 1:
        console.log("Good Effect, Neutral Intention");
        setRatingText("Good Effect, Neutral Intention");
        break;
      case 2:
        console.log("Good Effect, Bad Intention");
        setRatingText("Good Effect, Bad Intention");
        break;
      case 3:
        console.log("Neutral Effect, Good Intention");
        setRatingText("Neutral Effect, Good Intention");
        break;
      case 4:
        console.log("Neutral Effect, Neutral Intention");
        setRatingText("Neutral Effect, Neutral Intention");
        break;
      case 5:
        console.log("Neutral Effect, Bad Intention");
        setRatingText("Neutral Effect, Bad Intention");
        break;
      case 6:
        console.log("Bad Effect, Good Intention");
        setRatingText("Bad Effect, Good Intention");
        break;
      case 7:
        console.log("Bad Effect, Neutral Intention");
        setRatingText("Bad Effect, Neutral Intention");
        break;
      case 8:
      default:
        console.log("Bad Effect, Bad Intention");
        setRatingText("Bad Effect, Bad Intention");
        break;
    }
  }, [rating]);

  const onTextSubmit = (e) => {
    e.preventDefault();
    let promptString = llmPrompt.replace(/###/, function (match) {
      return llmText;
    });

    console.log(promptString);

    isLoading(true);
    fetch("http://127.0.0.1:5000/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: promptString }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        onTextGeneration(data);
        isLoading(false);
      });
  };

  return (
    <div className="llm-text-container">
      <div className="llm-question">Why did you choose {ratingText}?</div>
      <form onSubmit={onTextSubmit} className="llm-input-container">
        <input
          className="llm-text-input"
          placeholder="I chose this because..."
          type="text"
          onChange={(event) => setLlmText(event.target.value)}
        ></input>
        {!loading ? (
          <button type="submit" className="llm-text-submit">
            <SendIcon fontSize="large" />
          </button>
        ) : (
          <img src={loadingGif} width={48} height={48} alt="loading..." />
        )}
      </form>
    </div>
  );
}

export default LLMTextInput;
