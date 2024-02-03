import "./ratinggrid.css";

function RatingGrid({ onRating }) {
    return (
        <div className="rating-grid-container">
            <p className="effort-axis">Effort</p>
            <div>
                <p className="intention-axis">Intention</p>
                <div className="rating-button-group">
                    <button className="rating-button" onClick={() => onRating(0)}>GG</button>
                    <button className="rating-button" onClick={() => onRating(1)}>GN</button>
                    <button className="rating-button" onClick={() => onRating(2)}>GB</button>
                </div>

                <div className="rating-button-group">
                    <button className="rating-button" onClick={() => onRating(3)}>NG</button>
                    <button className="rating-button" onClick={() => onRating(4)}>NN</button>
                    <button className="rating-button" onClick={() => onRating(5)}>NB</button>
                </div>

                <div className="rating-button-group">
                    <button className="rating-button" onClick={() => onRating(6)}>BG</button>
                    <button className="rating-button" onClick={() => onRating(7)}>BN</button>
                    <button className="rating-button" onClick={() => onRating(8)}>BB</button>
                </div>
            </div>
        </div>
    );
}

export default RatingGrid;