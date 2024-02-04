import "./ratinggrid.css";
import { useState } from "react";
import { motion } from "framer-motion";

const ratings = ["GG", "GN", "GB", "NG", "NN", "NB", "BG", "BN", "BB"];

function StaticRatingButton({ rating, selected, correct }) {
    var styleCategory = "";
    if (selected && correct) {
        styleCategory = "selected-correct-static";
    }
    else if (selected) {
        styleCategory = "selected-incorrect-static";
    }
    else if (correct) {
        styleCategory = "correct-static";
    }
  return (
    <motion.button
      className={`rating-button ${styleCategory}`}
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

function StaticRatingGrid({ rating, correctArray }) {
  return (
    <div className="rating-grid-container">
      <p className="effort-axis">Effect</p>
      <div>
        <p className="intention-axis">Intention</p>
        <div className="rating-button-group">
          <StaticRatingButton
            rating={0}
            selected={rating === 0}
            correct={correctArray.includes(0)}
          />
          <StaticRatingButton
            rating={1}
            selected={rating === 1}
            correct={correctArray.includes(1)}
          />
          <StaticRatingButton
            rating={2}
            selected={rating === 2}
            correct={correctArray.includes(2)}
          />
        </div>

        <div className="rating-button-group">
          <StaticRatingButton
            rating={3}
            selected={rating === 3}
            correct={correctArray.includes(3)}
          />
          <StaticRatingButton
            rating={4}
            selected={rating === 4}
            correct={correctArray.includes(4)}
          />
          <StaticRatingButton
            rating={5}
            selected={rating === 5}
            correct={correctArray.includes(5)}
          />
        </div>

        <div className="rating-button-group">
          <StaticRatingButton
            rating={6}
            selected={rating === 6}
            correct={correctArray.includes(6)}
          />
          <StaticRatingButton
            rating={7}
            selected={rating === 7}
            correct={correctArray.includes(7)}
          />
          <StaticRatingButton
            rating={8}
            selected={rating === 8}
            correct={correctArray.includes(8)}
          />
        </div>
      </div>
    </div>
  );
}

export default StaticRatingGrid;
