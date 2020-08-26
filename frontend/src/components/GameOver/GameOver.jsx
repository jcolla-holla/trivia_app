import React, {useEffect, useState} from 'react'
import TopTenScore from '../TopTenScore/TopTenScore_container'

const GameOver = (props) => {
  
  // ComponentDidMount effect - fetch top scores immediately upon mounting
  useEffect(() => {   
    props.getTopTenScores()
  }, []);
  
  const saveScore = () => {
    // determine if top ten score
    let isTopTenScore = false
    if(props.topTen.length < 10) {
      isTopTenScore = true;
    } else if (props.topTen.length === 10) {
      let newTopTenIdx;
      props.topTen.map((scoreObj, idx) => {
        if (props.score < scoreObj.score) {
          isTopTenScore = true;
        }
      });
      
      debugger
      if (isTopTenScore) {
        // if yes, update in the DB the previously top score displaced
        // props.topTen[9]._id

      }
    }

    let newTopTenIdx 
    props.topTen.map((scoreObj,idx) => {
      if(props.score < scoreObj.score) {
        isTopTenScore = true
        newTopTenIdx = idx
      }
    })

    props.createScore({
      userId: props.userId,
      score: props.score,
      topTen: isTopTenScore,
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
        <button onClick={() => props.startNewRound()}>Play Again</button>
        {topTenScores}
      </div>
    );
}

export default GameOver