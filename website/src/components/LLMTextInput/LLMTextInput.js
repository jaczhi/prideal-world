import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
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
            <input className="llm-text-input" placeholder="I chose this because..." type="text" onChange={(event) => setLlmText(event.target.value)}></input>
            <SendIcon fontSize="large" className="llm-text-submit" />
        </div>
    );
}

export default LLMTextInput;