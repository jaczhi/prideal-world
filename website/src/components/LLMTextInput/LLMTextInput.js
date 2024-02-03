import { useState } from "react";
import "./llmtextinput.css";

function LLMTextInput({ rating = "Good Good" }) {
    const [llmText, setLlmText] = useState("");

    const onTextSubmit = () => {
        console.log(llmText);

        fetch("http://127.0.0.1:5000/prompt", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({"input": llmText}),
        })
        .then((res) => res.text())
        .then((data) => console.log(data)); // The capital of Germany is Berlin.
    }

    return (
        <div className="llm-text-container">
            {rating && <div>Why did you choose {rating}?</div>}
            <textarea className="llm-text-input" placeholder="I chose this because..." type="text" onChange={(event) => setLlmText(event.target.value)}></textarea>
            <button className="llm-text-submit" onClick={onTextSubmit}>Submit</button>
        </div>
    );
}

export default LLMTextInput;