import React, {useEffect} from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const TopTenScore = (props) => {
    // get the user's name on mounting
    useEffect(() => {
        props.getUser(props.userId)
    }, []);

    return (
      <div id="top-ten-score">
        User:{" "}
        {props.users[props.userId] ? props.users[props.userId].handle : "Loading Name..."}
        <br></br>
        Score: {props.score}
        <br></br>
        Date: {props.date.slice(0, 10)}
      </div>
    );
}

export default TopTenScore