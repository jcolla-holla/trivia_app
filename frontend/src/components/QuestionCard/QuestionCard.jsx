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

    const answersRadio = answersArr.current ? (
      answersArr.current.map((option, idx) => {
        return (
          <label key={idx}>
            {selected}
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


    // const adjustScore = (e) => {
    //     // update here with actual scroe
    //     e.preventDefault();
    //     props.updateScore(2);
    // };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.incrementQuestionsSubmitted();
    setSubmitted(true);
    
    // is correct? - update score
    // make all questions not answerable
    // game is over? = update 
  };
    
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
              disabled={submitted}
            />
          </form>
        </Card>
      </div>
    );
}

export default QuestionCard;