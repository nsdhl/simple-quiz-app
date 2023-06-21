import React from "react";
import { QuizData } from "../Data/QuizData";
import "../App.css";

function Quiz() {
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        <div className="question-container">
          <span id="question-no">Question 1</span>
          <span id="question-txt">{QuizData[0].question}</span>
        </div>
        <div className="option-container">
          {QuizData[0].options.map((option, index) => {
            return <button className="option-btn">{option}</button>;
          })}
        </div>

        <input type="button" value="Next" id="next-button" />
      </div>
    </div>
  );
}

export default Quiz;
