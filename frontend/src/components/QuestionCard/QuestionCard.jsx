import React, {useRef, useState} from "react";
import { mergeAnswers } from "../../util/general_util";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

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
            <ListGroup.Item>
              <input
                key={idx}
                type="radio"
                name="answer"
                onClick={() => setSelected(option)}
                disabled={submitted}
              ></input>
              {option}
            </ListGroup.Item>
          </label>
        );
        })
    ) : (
        <div>Loading Answers...</div>
    ); 
    return (
      <div id="question-card">
        <Card style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Title>{props.question.question}</Card.Title>
            <Card.Text>Difficulty: {props.question.difficulty}</Card.Text>
            <Card.Text>Category: {props.question.category}</Card.Text>
          </Card.Body>
          <form onSubmit={handleSubmit}>
            <ListGroup className="list-group-flush">{answersRadio}</ListGroup>
            <Button
              as="input"
              type="submit"
              value="Submit"
              variant="primary"
              size="lg"
              disabled={submitted ? submitted : !selected}
            />
          </form>
        </Card>
      </div>
    );
}

export default QuestionCard;