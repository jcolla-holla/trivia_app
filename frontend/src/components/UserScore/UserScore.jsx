import React from "react";
import Card from "react-bootstrap/Card";


const UserScore = (props) => {
  return (
    <Card className="top-user-score">
      <Card.Body>
        <div className="number">{props.number}</div>
        <div className="score">
          <strong>Score:</strong>
          <div>{props.score}</div>
        </div>
        <div className="date">
          <strong>Date:</strong>
          <div>{props.date.slice(0, 10)}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserScore;
