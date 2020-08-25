import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Questions from "../Questions/Questions"
import GameOver from "../GameOver/GameOver_container.js"

const MainPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [score, setScore] = useState(24)
  const [questionsSubmitted, setQuestionsSubmitted] = useState(0)
  const [gameOver, setGameOver] = useState(false);
  const [isDemoUser, setIsDemoUser] = useState(false)

  // ComponentDidMount effect - fetch 10 questions immediately upon mounting
  useEffect(() => {
    props.fetchQuestions()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login({email: email, password: password});
  }

  const incrementQuestionsSubmitted = () => {
    setQuestionsSubmitted(questionsSubmitted + 1)
  }

  const updateScore = (points) => {
    setScore(score + points)
  }

  const handleDemo = (e) => {
    e.preventDefault();
    setIsDemoUser(true)
  }


  return (
    <div id="main-page">
      <h1>Welcome to TrustLayer Trivia</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          ></input>
        </label>
        <Button
          as="input"
          type="submit"
          value="Login"
          variant="primary"
          size="lg"
        />
      </form>
      <Button
        as="input"
        type="button"
        onClick={(e) => handleDemo(e)}
        value="Demo"
        variant="primary"
        size="lg"
      />

      {(isDemoUser || props.isAuthenticated) && gameOver && (
        <Questions
          questions={props.questions}
          score={score}
          questionsSubmitted={questionsSubmitted}
          updateScore={updateScore}
          incrementQuestionsSubmitted={incrementQuestionsSubmitted}
          setGameOver={setGameOver}
        />
      )}

      {!gameOver && (
        <GameOver
          isDemoUser={isDemoUser}
          score={score}
          questionsSubmitted={questionsSubmitted}
        />
      )}
    </div>
  );
}
 
export default MainPage;