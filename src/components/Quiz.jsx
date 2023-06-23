import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";
import "../App.css";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState('');
  const [showResult, setShowResult] = useState(false);

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption('');
    setScore(0);
  };

  const changeQuestion = () => {

    if(currentQuestion === QuizData.length-1){
      setCurrentQuestion(0);
      setShowResult(true);
    }
    else if(currentQuestion<= QuizData.length-1)
    {setCurrentQuestion(currentQuestion+1)
    
    }
    
    if(clickedOption=== QuizData[currentQuestion].correct){
      setScore(score+1);
    }
    setClickedOption('');
  };

  return (
    <div>
      <div className="heading-txt">Quiz App</div>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question-container">
              <span id="question-no">{currentQuestion + 1}</span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].answers.map((option, index) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption === option ? "checked" : null
                    }`}
                    key={index}
                    onClick={() => {
                      setClickedOption(option);
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
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
