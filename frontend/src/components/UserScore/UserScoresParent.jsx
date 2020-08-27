import React, {useEffect} from "react";
import UserScore from "./UserScore";

const UserScoresParent = (props) => {
    // ComponentDidMount effect - fetch the user's scores immediately upon mounting
    useEffect(() => {
        props.getUserScores(props.userId)
    }, []);

    const userScores = props.userScores.map((scoreObj, idx) => {
    return (
        <UserScore
        key={scoreObj._id}
        number={idx + 1}
        score={scoreObj.score}
        date={scoreObj.date.slice(0, 10)}
        />
    );
    });

    return (
      <div id="user-scores-parent">
        <h3>Your Scores</h3>
        {userScores}
      </div>
    );
};

export default UserScoresParent;
