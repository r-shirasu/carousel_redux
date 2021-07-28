import "./Fruits.scss";
import { useSelector, useDispatch } from "react-redux";
import { fruitsData } from "./data";

// get our fontawesome imports
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fruits = () => {
  const count = useSelector((state) => state.fruitsDataNum);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

  const randomEvent = () => {
    dispatch({ type: "RANDOM_COUNT" });
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

      <div className="randomButton-container">
        <button className="random-btn" onClick={randomEvent}>
          Random
        </button>
      </div>
    </div>
  );
};
