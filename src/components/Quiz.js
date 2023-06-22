import React, {useState} from "react";
import { QuizData } from "../Data/QuizData";
import "../App.css"

function Quiz() {

  const  [currentQuestion, setCurrentQuestion] = useState (0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);

  const changeQuestion = () => {
    
    if (currentQuestion === QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {

    }

    const updateScore = () => {
      if(clickedOption===QuizData[currentQuestion].answer){
        setScore(score+1)
      }
    }
    updateScore();
  };
  return (
    <div>
    <div className="heading-txt">Quiz App</div>
      <div className="container">
        <div className="question-container">
          <span id="question-no">{currentQuestion+1}</span>
          <span id="question-txt">{QuizData[currentQuestion].question}</span>
        </div>
        <div className="option-container">
          {QuizData[currentQuestion].options.map((option, index) => {
            return <button className="option-btn" onClick={ ()=> {
              setClickedOption(index +1)
            }}>{option}</button>;
          })}
        </div>

        <input type="button"  value="Next" id="next-button" onClick={changeQuestion} />
      </div>
    </div>
  );
}

export default Quiz;
