import React from 'react';
import Quote from './Quote';
import Author from './Author';
import Buttons from './Buttons';

const QuoteBox = ({ quote, author, fetchQuote, textColor, bgColor }) => (
  <div id="quote-box" className="card" style={{ backgroundColor: textColor, color: bgColor }}>
    <Quote text={quote} />
    <Author author={author} />
    <Buttons fetchQuote={fetchQuote} quote={quote} author={author} textColor={bgColor} bgColor={textColor} />
  </div>
);

export default QuoteBox;
