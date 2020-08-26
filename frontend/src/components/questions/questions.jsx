import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import Alert from "react-bootstrap/Alert";
import Carousel from "react-bootstrap/Carousel";

const Questions = (props) => {
    const questionList = props.questions.map((question,idx) => {
        return (
          <Carousel.Item>
            <QuestionCard
              key={idx}
              question={question}
              updateScore={props.updateScore}
              questionsSubmitted={props.questionsSubmitted}
              incrementQuestionsSubmitted={props.incrementQuestionsSubmitted}
              setGameOver={props.setGameOver}
              score={props.score}
            />
          </Carousel.Item>
        );
    })

    return (
      <div id="questions">
        {props.questionsSubmitted === 9 && (
          <Alert variant="warning" dismissable="true">
            <strong>One question left!</strong> Submit your answer to see your
            final score.
          </Alert>
        )}
        <div className="score-parent">
          <div className="score">Score: {props.score}</div>
          <div className="questions-submitted">
            Questions Submitted: {props.questionsSubmitted}
          </div>
        </div>
        <div>
          {questionList.length === 0 ? (
            <p>Loading Questions...</p>
          ) : (
            <Carousel fade interval={null} touch>
              {questionList}
            </Carousel>
          )}
        </div>
      </div>
    );
}

export default Questions