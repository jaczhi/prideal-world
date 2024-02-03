import ThreeCube from "../../components/ThreeCube/ThreeCube";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "../scenarios.css";

function Scenario2() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="App">
        <div className="overlay">
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

export default Scenario2;