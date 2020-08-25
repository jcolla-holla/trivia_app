import React, {useEffect, useState} from 'react'
import TopTenScore from '../TopTenScore/TopTenScore'

const GameOver = (props) => {
    const createAccount = props.isDemoUser ? <p>Thanks for playing.  Save your score by making an account.</p> : <p>Thanks for playing!  Your score has been saved.</p>


  // ComponentDidMount effect - fetch 10 questions immediately upon mounting
  useEffect(() => {   
    props.getTopTenScores()
  }, []);

  const saveScore = () => {
    // props.createScore({ userId: props.session.user.id, score: props.score, topTen: false });
  }


  const topTenScores = props.topTen.map((scoreObj, idx) => {
    return <TopTenScore key={idx} scoreObj={scoreObj} />;
  });

  // logic to replace top 10 scores if user is saved

    return (
      <div id="game-over">
        <h1>Game Over!!</h1>
        <div>
          Final Score: {props.score}
        </div>
        {createAccount}
        <button onClick={() => saveScore()}>Save a Score</button>
        {topTenScores}
      </div>
    );
}

export default GameOver