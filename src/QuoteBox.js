import React from 'react';
import Quote from './Quote';
import Author from './Author';
import Buttons from './Buttons';

const QuoteBox = ({ quote, author, fetchQuote, textColor, bgColor }) => (
  <div className="container">
    <div id="quote-box" className="card p-3 mx-auto" style={{ backgroundColor: '#ffffff', color: textColor }}>
      <Quote text={quote} />
      <Author author={author} />
      <Buttons fetchQuote={fetchQuote} quote={quote} author={author} textColor={bgColor} bgColor="#ffffff" />
    </div>
  </div>
);

export default QuoteBox;
