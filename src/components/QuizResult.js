import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
      Your Score: {props.score} <br/>
      Total Score : {props.totalScore}
    </div>
    </>
  )
}

export default QuizResult;
