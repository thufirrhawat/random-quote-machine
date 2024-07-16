import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Buttons = ({ fetchQuote, quote, author, textColor }) => (
  <div className="buttons">
    <a
      id="tweet-quote"
      className="btn tweet-button"
      style={{ backgroundColor: 'black', color: textColor }}
      href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <button id="new-quote" className="btn" style={{ backgroundColor: 'black', color: textColor }} onClick={fetchQuote}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </button>
  </div>
);

export default Buttons;
