import ThreeCube from "../../components/ThreeCube/ThreeCube";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "../scenarios.css";
import RatingGrid from "../../components/RatingGrid/RatingGrid";
import LLMTextInput from "../../components/LLMTextInput/LLMTextInput";
import Typewriter from "../../components/Typewriter/Typewriter";

function Scenario1() {
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onRating = (ratingScore) => {
        switch (ratingScore) {
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

    return (
        <div className="App">
            <div className="overlay">
                <div className="dialogue">
                    <Typewriter text={"Please rate the below dialogue snippet on [person]'s intention and the effect on [person]."} delay={50}/>
                </div>

                <div className="rating-grid">
                    <RatingGrid onRating={onRating}/>
                </div>

                <div className="llm-text">
                    <LLMTextInput rating={rating}/>
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