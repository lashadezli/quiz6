
import React from 'react';
import Thanks from '../assets/images/illustration-thank-you.svg'
import '../components/thankyou.css';


const ThankYou = ({ selectedRating }) => {
  return (
    <div className="thank-you-container">
      <img src={Thanks} alt="Thank You" />

      <p>You selected {selectedRating} of 5</p>
      <h2>Thank You!</h2>
      <h3>
      We appreciate you taking the time to give a rating.
      If you ever need more support, don’t hesitate to
       get in touch!
      </h3>
    </div>
  );
};

export default ThankYou;
