import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import QuoteBox from "./QuoteBox";
import "./App.scss";

library.add(faSyncAlt, faTwitter);

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A1FF33",
  "#FF5733",
  "#FFC300",
  "#DAF7A6",
  "#581845",
  "#900C3F",
];

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [bgColor, setBgColor] = useState(colors[0]);
  const [textColor, setTextColor] = useState("#ffffff");

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
  
      const newBgColor = getRandomColor();
      const newTextColor = getDarkerColor(newBgColor);
      setBgColor(newBgColor);
      setTextColor(newTextColor);
    } catch (error) {
      console.error('Error fetching quote:', error.message);
    }
  };
  
  
  

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getDarkerColor = (color) => {
    let colorCode = color.slice(1);
    let num = parseInt(colorCode, 16);
    let amt = -50;
    let R = (num >> 16) + amt;
    let G = ((num >> 8) & 0x00ff) + amt;
    let B = (num & 0x0000ff) + amt;

    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <QuoteBox
        quote={quote}
        author={author}
        fetchQuote={fetchQuote}
        textColor={textColor}
        bgColor={bgColor}
      />
    </div>
  );
}

export default App;
