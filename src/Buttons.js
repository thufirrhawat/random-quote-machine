import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// Utility function to get a contrasting color
const getContrastingColor = (color) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ? '#000000' : '#ffffff';
};

const Buttons = ({ fetchQuote, quote, author, textColor, bgColor }) => {
  const buttonBackgroundColor = getContrastingColor(bgColor);
  const buttonTextColor = getContrastingColor(buttonBackgroundColor);

  return (
    <div className="buttons">
      <a
        id="tweet-quote"
        className="btn tweet-button"
        style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }}
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <button
        id="new-quote"
        className="btn"
        style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }}
        onClick={fetchQuote}
      >
        <FontAwesomeIcon icon={faSyncAlt} />
      </button>
    </div>
  );
};

export default Buttons;
