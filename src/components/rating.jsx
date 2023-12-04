import React, { useState } from 'react';
import '../components/rating.css';
import Star from '../assets/images/icon-star.svg';

const Rating = ({ onSubmitRating }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating > 0) {
      onSubmitRating(selectedRating);
    }
  };

  return (
    <div className="rating-container">
       <div className="rating-header">
         <img src={Star} alt=''/>
         <h1>How did we do?</h1>
         <p>Please let us know how we did with your support <br/> 
         request. All feedback is appreciated to help us <br/>
         improve our offering!</p>
       </div>

      <div className="rating-numbers">
        {[1, 2, 3, 4, 5].map((number) => (
          <span
            key={number}
            className={`rating-number ${number === selectedRating ? 'selected' : ''}`}
            onClick={() => handleRatingClick(number)}
          >
            {number}
          </span>
        ))}
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
