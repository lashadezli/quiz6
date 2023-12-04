import React, { useState } from 'react';
import Rating from './components/rating';
import ThankYou from './components/thankyou';

const App = () => {
  const [submittedRating, setSubmittedRating] = useState(null);

  const handleRatingSubmit = (rating) => {
    setSubmittedRating(rating);
  };

  return (
    <div className="app-container">
      {submittedRating === null ? (
        <Rating onSubmitRating={handleRatingSubmit} />
      ) : (
        <ThankYou selectedRating={submittedRating} />
      )}
    </div>
  );
};

export default App;
