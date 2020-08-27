import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const Questions = (props) => {
  const questionList = props.questions.map((question, idx) => {
    return (
      <Carousel.Item key={idx}>
        <QuestionCard
          questionNumber={(idx + 1).toString()}
          question={question}
          updateScore={props.updateScore}
          questionsSubmitted={props.questionsSubmitted}
          incrementQuestionsSubmitted={props.incrementQuestionsSubmitted}
          setGameOver={props.setGameOver}
          score={props.score}
        />
      </Carousel.Item>
    );
  });

  return (
    <div id="questions">
      <div className="score-parent">
        <div className="score">Score: {props.score}</div>
        <div className="questions-submitted">
          Questions Submitted: {props.questionsSubmitted}
        </div>
      </div>
      <div>
        {questionList.length === 0 ? (
          <div className="loading-questions-msg">
            <Spinner animation="border" variant="primary" />
            <p>Loading Questions...</p>
            <p>If this lasts more than 10 seconds, click to load again.</p>
            <Button
              variant="primary"
              onClick={() => props.fetchQuestions()}
              size="lg"
            >Reload</Button>
          </div>
        ) : (
          <Carousel
            fade
            keyboard={true}
            interval={null}
            touch
            indicators={false}
          >
            {questionList}
          </Carousel>
        )}
      </div>
      <div id="nav-helper-msg">
        <h4>
          Navigate between questions using the arrows on the left and right.
        </h4>
      </div>
    </div>
  );
};

export default Questions;
