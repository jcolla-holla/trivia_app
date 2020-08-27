import React, {useEffect, useState} from 'react'
import TopTenScore from '../TopTenScore/TopTenScore_container'
import UserScoresParent from "../UserScore/UserScoresParent"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const GameOver = (props) => {
  const [isSaveScoreDisabled, setIsSaveScoreDisabled] = useState(false);
  
  // ComponentDidMount effect - fetch top scores immediately upon mounting
  useEffect(() => {   
    props.getTopTenScores();
    props.fetchQuestions();
  }, []);
  
  const saveScore = () => {
    // disable the Save Score button so user can't save their score multiple times
    setIsSaveScoreDisabled(true);

    // determine if current score is a new top ten score
    let isTopTenScore = false
    if(props.topTen.length < 10) {
      isTopTenScore = true;
    } else if (props.topTen.length === 10) {
      props.topTen.map((scoreObj, idx) => {
        if (props.score < scoreObj.score) {
          isTopTenScore = true;
        }
      });
      
      if (isTopTenScore) {
        // update the current final top ten score to no longer be part of top ten
        props.updateScore({ id: props.topTen[9]._id, topTen: false });
      }
    }

    // create the new score in the database
    props.createScore({
      userId: props.userId,
      score: props.score,
      topTen: isTopTenScore,
    });

    
    // if the saved score is in the new top ten, refresh that data for user to see their score in top ten list
    // this is a hacky way of doing this, though if this workflow fails it doesn't ruin the user experience or error out
      setTimeout(function () {
        props.getTopTenScores()
        props.getUserScores(props.userId)
      }, 1000)
  }
  
  const createAccount = props.isDemoUser ? <p>Nice job! Make an account to save your score.</p> : <p>Nice job! Click Save Score to save your score.</p>

  const topTenScores = props.topTen.map((scoreObj,idx) => {
    return (
        <TopTenScore
          number={idx + 1}
          key={scoreObj._id}
          userId={scoreObj.userId}
          score={scoreObj.score}
          date={scoreObj.date}
        />
    );
  });



    return (
      <div id="game-over">
        <div id="score-display">
          <Card className="score-display-box">
            <Card.Title>
              <h1>Game Over!</h1>
            </Card.Title>
            <Card.Body className="score-display-box">
              <div className="final-score">Final Score: {props.score}</div>
              {createAccount}


              <div id="start-over-btns">
                {props.isAuthenticated && (
                  <Button onClick={() => saveScore()} disabled={isSaveScoreDisabled}>
                    Save Score
                  </Button>
                )}

                <Button
                  onClick={() => props.startNewRound()}
                  disabled={!props.isAuthenticated}
                >
                  Play Again!
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>



        <div id="all-scores">
          {/* game top ten scores from all users */}
          <div className="top-ten-scores-parent">
            <h3>Top Ten Scores</h3>
            {topTenScores}
          </div>

          {/* current user's top ten scores */}
          {props.isAuthenticated && (
            <UserScoresParent
              getUserScores={props.getUserScores}
              userScores={props.userScores}
              userId={props.userId}
            />
          )}
        </div>

      </div>
    );
}

export default GameOver