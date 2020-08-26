import React, {useRef, useState} from "react";
import { mergeAnswers } from "../../util/general_util";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactHtmlParser from "react-html-parser";


const QuestionCard = (props) => {
    const [selected, setSelected] = useState()
    const [submitted, setSubmitted] = useState(false)
    const answersArr = useRef(
      mergeAnswers(
        props.question.correct_answer,
        props.question.incorrect_answers
      )
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.incrementQuestionsSubmitted();
        setSubmitted(true);
        
        // update score based on question difficulty and if correct
        const difficulty = props.question.difficulty;
        let scoreAdjustment
        if (selected === props.question.correct_answer) {
            if(difficulty === "easy") {
                scoreAdjustment = -2
            }
            else if (difficulty === "medium") {
                scoreAdjustment = -4
            }
            else if(difficulty === "hard") {
                scoreAdjustment = -8
            }
        } else {
            if(difficulty === "easy") {
                scoreAdjustment = 2
            }
            else if (difficulty === "medium") {
                scoreAdjustment = 4
            }
            else if(difficulty === "hard") {
                scoreAdjustment = 8
            }
        }

        props.updateScore(scoreAdjustment)

        if (props.questionsSubmitted === 9 ) {
            props.setGameOver(true);
        }    

        if (props.score + scoreAdjustment === 0) {
            props.setGameOver(true);
        }
    };
                            
    const answerClass = (option) => {
        if (submitted) {
            return option === props.question.correct_answer ? "correct" : "wrong";
        }
    }

    const answersRadio = answersArr.current ? (
        answersArr.current.map((option, idx) => {
        return (
          <label key={idx} className={answerClass(option)}>
            <input
              key={idx}
              type="radio"
              name="answer"
              onClick={() => setSelected(option)}
              disabled={submitted}
            ></input>
            <span>{ReactHtmlParser(option)}</span>
          </label>
        );
        })
    ) : (
        <div>Loading Answers...</div>
    ); 
    return (
      <div className="question-card">
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title className="question-title">
              {props.questionNumber +
                ". " +
                ReactHtmlParser(props.question.question)}
            </Card.Title>
          </Card.Body>
          <form onSubmit={handleSubmit}>
            <div className="radio-parent">{answersRadio}</div>
            
            <Card.Body className="feedback-parent">
              {submitted && selected === props.question.correct_answer && (
                <div className="feedback">Correct! Try another.</div>
              )}
              {submitted && selected !== props.question.correct_answer && (
                <div className="feedback">Wrong. Try another.</div>
              )}
            </Card.Body>

            <Card.Footer>
              <div className="question-specs">
                <div className={props.question.difficulty}>
                  {props.question.difficulty[0].toUpperCase() +
                    props.question.difficulty.slice(1)}
                </div>
                <div className="category"> {props.question.category}</div>
              </div>

              <Button
                as="input"
                type="submit"
                value="Submit"
                variant="primary"
                size="lg"
                disabled={submitted ? submitted : !selected}
              />
            </Card.Footer>
          </form>
        </Card>
      </div>
    );
}

export default QuestionCard;