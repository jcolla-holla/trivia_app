import React, {useEffect, useState} from 'react'
import TopTenScore from '../TopTenScore/TopTenScore_container'

const GameOver = (props) => {
  const [isTopTenScore, setIsTopTenScore] = useState(false)  
  
  // ComponentDidMount effect - fetch top scores immediately upon mounting
  useEffect(() => {   
    props.getTopTenScores()
  }, []);
  
  const saveScore = () => {
    // props.createScore({ userId: props.session.user.id, score: props.score, topTen: false });
    props.createScore({
      userId: props.userId,
      score: props.score,
      topTen: true,
    });
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


  // logic to replace top 10 scores if user is saved

    return (
      <div id="game-over">
        <h1>Game Over!!</h1>
        <div>Final Score: {props.score}</div>
        {createAccount}
        <button onClick={() => saveScore()}>Save a Score</button>
        <button onClick={() => props.setGameOver(false)}>Play Again</button>
        {topTenScores}
      </div>
    );
}

export default GameOver