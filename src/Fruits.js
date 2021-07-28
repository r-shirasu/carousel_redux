import "./Fruits.scss";
import React, { useState } from "react";
import { fruitsData } from "./data";

// get our fontawesome imports
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fruits = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count >= fruitsData.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count === 0) {
      setCount(fruitsData.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const randomEvent = () => {
    setCount(Math.floor(Math.random() * fruitsData.length));
  };

  return (
    <div className="review">
      <div className="img-container">
        <img src={fruitsData[count].img} alt={fruitsData[count].alt}></img>
        <h4 className="fruits">{fruitsData[count].fruitsName}</h4>
        <p className="color">{fruitsData[count].color}</p>
        <p className="info">{fruitsData[count].text}</p>
      </div>
      <div className="button-container">
        <button className="prev-btn">
          <FontAwesomeIcon icon={faChevronLeft} onClick={decrease} />
        </button>
        <button className="next-btn">
          <FontAwesomeIcon icon={faChevronRight} onClick={increase} />
        </button>
      </div>

      <div className="randombutton-container">
        <button className="random-btn" onClick={randomEvent}>
          Random
        </button>
      </div>
    </div>
  );
};
