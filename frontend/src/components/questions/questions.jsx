import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'

const Questions = (props) => {
    const questionList = props.questions.map((question,idx) => {
        return (
          <QuestionCard
            key={idx}
            question={question}
            updateScore={props.updateScore}
            questionsSubmitted={props.questionsSubmitted}
            incrementQuestionsSubmitted={props.incrementQuestionsSubmitted}
            setGameOver={props.setGameOver}
            score={props.score}
          />
        );
    })

    return (
      <div>
        <div>
          Score: {props.score}
          Questions Submitted: {props.questionsSubmitted}
        </div>
        <div>
          {questionList.length === 0 ? <p>Loading Questions...</p> : questionList}
        </div>
      </div>
    );
}

export default Questions