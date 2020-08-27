import React, {useEffect} from 'react'
import Card from "react-bootstrap/Card";

const TopTenScore = (props) => {
    // get the user's name on mounting
    useEffect(() => {
        props.getUser(props.userId)
    }, []);

    return (
      <Card className="top-ten-score-card">
        <Card.Body>
          <div className="number">{props.number}</div>
          <div className="score">
            <span>Score:</span>
            <div>{props.score}</div>
          </div>

          <div className="user-and-date">
            <div>
              <strong>User</strong>:{" "}
              {props.users[props.userId]
                ? props.users[props.userId].handle
                : "Loading Name..."}
            </div>

            <div>
              <strong>Date</strong>: {" " + props.date.slice(0, 10)}
            </div>
          </div>
        </Card.Body>
      </Card>
    );
}

export default TopTenScore