import React from 'react'

const GameOver = (props) => {


    const createAccount = props.isDemoUser ? <p>Thanks for playing.  Save your score by making an account.</p> : <p>Thanks for playing!  Your score has been saved.</p>

    // const leaderBoard 

    // scores actions
    // scores reducer
    // create a few scores of from browser console
    // logic to replace top 10 scores if user is saved

    return (
      <div id="game-over">
        <h1>Game Over!!</h1>
        <div>
          Final Score: {props.score}
        </div>
        {createAccount}
      </div>
    );
}

export default GameOver