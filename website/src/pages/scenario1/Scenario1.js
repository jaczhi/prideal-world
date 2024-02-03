import ThreeCube from "../../components/ThreeCube/ThreeCube";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../scenarios.css";
import RatingGrid from "../../components/RatingGrid/RatingGrid";

function Scenario1() {
    const [show, setShow] = useState(false);
    const [llmText, setLlmText] = useState("");
    const [rating, setRating] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onRating = (rating) => {
        switch (rating) {
            case 0:
                console.log("Good Good");
                setRating("Good Good");
                break;
            case 1:
                console.log("Good Neutral");
                setRating("Good Neutral");
                break; 
            case 2:
                console.log("Good Bad");
                setRating("Good Bad");
                break;
            case 3:
                console.log("Neutral Good");
                setRating("Neutral Good");
                break;
            case 4:
                console.log("Neutral Neutral");
                setRating("Neutral Neutral");
                break; 
            case 5:
                console.log("Neutral Bad");
                setRating("Neutral Bad");
                break;
            case 6:
                console.log("Bad Good");
                setRating("Bad Good");
                break;
            case 7:
                console.log("Bad Neutral");
                setRating("Bad Neutral");
                break; 
            case 8:
                console.log("Bad Bad");
                setRating("Good Bad");
                break;
        }
    }

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
        <div className="App">
            <div className="overlay">
                <div className="rating-grid">
                    <RatingGrid onRating={onRating}/>
                </div>

                <div className="llm-text-container">
                    <div>Why did you choose {rating}?</div>
                    <textarea className="llm-text-input" type="text" onChange={(event) => setLlmText(event.target.value)}></textarea>
                    <button className="llm-text-submit" onClick={onTextSubmit}>Submit</button>
                </div>
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