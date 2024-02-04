import "./ratinggrid.css";
import { useState } from "react";
import { motion } from "framer-motion";

const ratings = ["GG", "GN", "GB", "NG", "NN", "NB", "BG", "BN", "BB"];

function RatingButton({ rating, onRating, selectedButton, setSelectedButton }) {
  const onRatingSelect = () => {
    onRating(rating);
    setSelectedButton(rating);
  };

  return (
    <motion.button
      className={`rating-button ${selectedButton === rating ? "selected" : ""}`}
      onClick={onRatingSelect}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.25, delay: 0.05 * rating, }}
      variants={{
        initial: {
          opacity: 0,
          x: -25,
        },
        animate: {
          opacity: 1,
          x: 0,
        },
      }}
    >
      {ratings[rating]}
    </motion.button>
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
