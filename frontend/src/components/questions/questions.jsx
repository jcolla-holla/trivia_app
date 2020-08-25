import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'

const Questions = (props) => {
    const questionList = props.questions.map((question,idx) => {
        return (
          <QuestionCard
            key={idx}
            question={question}
            updateScore={props.updateScore}
            incrementQuestionsSubmitted={props.incrementQuestionsSubmitted}
          />
        );
    })

    return (
      <div>
        <div>
          Score: {props.score}
          Questions Remaining: {10 - props.questionsSubmitted}
        </div>
        <div>{questionList}</div>
      </div>
    );
}

export default Questions