import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'

const Questions = (props) => {
    const questionList = props.questions.map((question,idx) => {
        return (<QuestionCard key={idx} question={question} updateScore={props.updateScore}/>)
    })

    return (
      <div>
        Questions rendered
        <div>
          Score: {props.score}
        </div>
        <div>{questionList}</div>
      </div>
    );
}

export default Questions