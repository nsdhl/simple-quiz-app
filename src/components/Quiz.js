import React from "react";
import { QuizData } from "../Data/QuizData";

function Quiz() {
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        <div className="question-container"></div>
        <div className="option-container">
          {QuizData[0].options.map((option, index) => {
            return <button className="option-btn"></button>;
          })}
        </div>

        <input type="button" value="Next" id="next-button" />
      </div>
    </div>
  );
}

export default Quiz;