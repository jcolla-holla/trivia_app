import React, {useRef, useState, useEffect} from "react";
import { mergeAnswers } from "../../util/general_util";

const QuestionCard = (props) => {
    const answersArr = useRef(
      mergeAnswers(
        props.question.correct_answer,
        props.question.incorrect_answers
      )
    );

    const answersRadio = answersArr.current ? (
      answersArr.current.map((option, idx) => {

        return (
          <label>
            {option}
            <input key={idx} type="radio" value={option}></input>
            <br></br>
          </label>
        );
      })
    ) : (
      <div>Loading Answers...</div>
    ); 


        const increaseScore = (e) => {
          e.preventDefault();
          props.updateScore(2);
        };
    
    return (
      <div id="question-card">
        <button onClick={increaseScore} value="increase score"></button>
        Question {props.id}
        {props.question.question}
        {props.question.difficulty}
        {props.question.type}
        {answersRadio}
      </div>
    );
}

export default QuestionCard;