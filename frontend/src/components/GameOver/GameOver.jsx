import React, {useEffect, useState} from 'react'
import TopTenScore from '../TopTenScore/TopTenScore_container'

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
    // this is a very hacky way of doing this, though if this workflow fails it doesn't ruin the user experience or error out
      setTimeout(function () {
        props.getTopTenScores()
      }, 1000)
  }
  
  const createAccount = props.isDemoUser ? <p>Thanks for playing.  Save your score by making an account.</p> : <p>Thanks for playing!  Your score has been saved.</p>

  const topTenScores = props.topTen.map(scoreObj => {
    return (
        <TopTenScore
          key={scoreObj._id}
          userId={scoreObj.userId}
          score={scoreObj.score}
          date={scoreObj.date}
        />
    );
  });

    return (
      <div id="game-over">
        <h1>Game Over!!</h1>
        <div>Final Score: {props.score}</div>
        {createAccount}
        {props.isAuthenticated && (
          <button onClick={() => saveScore()} disabled={isSaveScoreDisabled}>
            Save a Score
          </button>
        )}
        <button
          onClick={() => props.startNewRound()}
          disabled={!props.isAuthenticated}
        >
          Play Again!
        </button>
        {topTenScores}

        
        {/* users top ten scores */}
      </div>
    );
}

export default GameOver