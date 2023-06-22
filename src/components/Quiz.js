import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult  from "./QuizResult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    if (currentQuestion === QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }

   

    const resetAll  = () => {
      setShowResult(false);
      setCurrentQuestion(0);
      setClickedOption(0);
      setScore(0);
    }

    resetAll();

    

    const updateScore = () => {
      if (clickedOption === QuizData[currentQuestion].answer) {
        setScore(score + 1);
      }
    };
    updateScore();
  };



  return (
    <div>
      <div className="heading-txt">Quiz App</div>
      <div className="container">
        {showResult ? (
          <QuizResult score =   {score} totalScore = {QuizData.length} tryAgain={resetAll}/>
        ):(
          <>
          
        <div className="question-container">
          <span id="question-no">{currentQuestion + 1}</span>
          <span id="question-txt">{QuizData[currentQuestion].question}</span>
        </div>
        <div className="option-container">
          {QuizData[currentQuestion].options.map((option, index) => {
            return (
              <button
                className={`option-btn ${
                  clickedOption === index + 1 ? "checked" : null
                }`}
                key={index}
                onClick={() => {
                  setClickedOption(index + 1);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>

        <input
          type="button"
          value="Next"
          id="next-button"
          onClick={changeQuestion}
        />
        </>)}
      </div>
    </div>
  );
}

export default Quiz;
