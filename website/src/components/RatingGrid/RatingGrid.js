import "./ratinggrid.css";
import { useState } from "react";

const ratings = ["GG", "GN", "GB", "NG", "NN", "NB", "BG", "BN", "BB"];

function RatingButton({ rating, onRating, selectedButton, setSelectedButton }) {
  const onRatingSelect = () => {
    onRating(rating);
    setSelectedButton(rating);
  };

  return (
    <button
      className={`rating-button ${selectedButton === rating ? "selected" : ""}`}
      onClick={onRatingSelect}
    >
      {ratings[rating]}
    </button>
  );
}

function RatingGrid({ onRating }) {
  const [selectedButton, setSelectedButton] = useState(-1);

  return (
    <div className="rating-grid-container">
      <p className="effort-axis">Effort</p>
      <div>
        <p className="intention-axis">Intention</p>
        <div className="rating-button-group">
          <RatingButton
            rating={0}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <RatingButton
            rating={1}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <RatingButton
            rating={2}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        </div>

        <div className="rating-button-group">
          <RatingButton
            rating={3}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <RatingButton
            rating={4}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <RatingButton
            rating={5}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        </div>

        <div className="rating-button-group">
          <RatingButton
            rating={6}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <RatingButton
            rating={7}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
          <RatingButton
            rating={8}
            onRating={onRating}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        </div>
      </div>
    </div>
  );
}

export default RatingGrid;
