import { useState } from "react";
import "./Modal.css";

const Modal = ({ active, setActive, selectedService }) => {
  const [sliderValue, setSliderValue] = useState(6);
  const [lessonFormat, setLessonFormat] = useState("Distant");

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };

  const handleRadioChange = (e) => {
    setLessonFormat(e.target.value);
  };

  const calculateCost = () => {
    if (selectedService) {
      const { distantStep, liveStep } = selectedService;
      if (lessonFormat === "Distant") {
        return sliderValue * distantStep;
      } else if (lessonFormat === "Live") {
        return sliderValue * liveStep;
      }
    }

    return 0;
  };

  const telegramLink = "tg://resolve?domain=StudentAssistantBotBot";

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="calculator">
          <h3 className="calculator__title">Calculator</h3>
          <ul className="calculator__radiobtns">
            <p className="calculator__radiobtns-title">Lesson format</p>
            <li className="calculator__radiobtn">
              <input
                type="radio"
                className="classes"
                id="live"
                name="radoibtn"
                value="Live"
                checked={lessonFormat === "Live"}
                onChange={handleRadioChange}
              />
              <label htmlFor="live">Live</label>
            </li>
            <li className="calculator__radiobtn">
              <input
                type="radio"
                className="classes"
                id="distant"
                name="radoibtn"
                value="Distant"
                checked={lessonFormat === "Distant"}
                onChange={handleRadioChange}
              />
              <label htmlFor="distant">Distant</label>
            </li>
          </ul>
          <div className="calculator__slider">
            <h3 className="calculator__slider-title">Lessons per month</h3>
            <div className="calculator__slider-container">
              <input
                type="range"
                min="1"
                max="10"
                value={sliderValue}
                className="slider__range"
                onChange={handleSliderChange}
              />
              <p className="calculator__slider-text calculator_silder-text-1">
                Amount: <span>{sliderValue}</span>
              </p>
              <p className="calculator__slider-text calculator__slider-text-2">
                Total cost: <span>{calculateCost()}</span>
              </p>

              <button
                onClick={() => (window.location.href = telegramLink)}
                className="calculator__slider-btn"
              >
                order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
