import React from "react";

const UserScores = (props) => {

  return (
    <div id="top-user-score">
      <br></br>
      Score: {props.score}
      <br></br>
      Date: {props.date.slice(0, 10)}
    </div>
  );
};

export default UserScores;
