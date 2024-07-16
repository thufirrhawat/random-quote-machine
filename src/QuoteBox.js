import React from 'react';
import Quote from './Quote';
import Author from './Author';
import Buttons from './Buttons';

const QuoteBox = ({ quote, author, fetchQuote, textColor }) => (
  <div id="quote-box" className="p-5 bg-light rounded shadow text-center" style={{ backgroundColor: '#ffffff', color: textColor }}>
    <Quote text={quote} />
    <Author author={author} />
    <Buttons fetchQuote={fetchQuote} quote={quote} author={author} textColor={textColor} />
  </div>
);

export default QuoteBox;
