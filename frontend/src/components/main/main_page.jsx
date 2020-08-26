import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Questions from "../Questions/Questions"
import GameOver from "../GameOver/GameOver_container.js"
import Modal from "react-bootstrap/Modal";

const MainPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [handle, setHandle] = useState("")
  const [score, setScore] = useState(24)
  const [questionsSubmitted, setQuestionsSubmitted] = useState(0)
  const [gameOver, setGameOver] = useState(false);
  const [isDemoUser, setIsDemoUser] = useState(false)

  // ComponentDidMount effect - fetch 10 questions immediately upon mounting
  useEffect(() => {
    props.fetchQuestions()
  }, []);

  const handleStartGameSubmit = (e) => {
    e.preventDefault();
    props.login({email: email, password: password});
  }

  const handlePlayAgainSubmit = (e) => {
    e.preventDefault();
    setIsDemoUser(false)
    props.signup({ email: email, password: password, handle: handle });
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

  const startNewRound = () => {
    setScore(24)
    setGameOver(false)
    setQuestionsSubmitted(0)
  }


  return (
    <div id="main-page">
      <h1>Welcome to TrustLayer Trivia</h1>

      {(isDemoUser || props.isAuthenticated) && !gameOver && (
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
          startNewRound={startNewRound}
          score={score}
          questionsSubmitted={questionsSubmitted}
        />
      )}

      {!isDemoUser && !props.isAuthenticated && (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Let's Get Started!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleStartGameSubmit}>
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
              value="Continue as Guest"
              variant="secondary"
              size="lg"
            />
          </Modal.Body>

          <Modal.Footer>
            As a Guest, create an account later to save your score.
          </Modal.Footer>
        </Modal.Dialog>
      )}

      {isDemoUser && gameOver && (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Save Your Score</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handlePlayAgainSubmit}>
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
              <label>
                Handle
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.currentTarget.value)}
                ></input>
              </label>
              <Button
                as="input"
                type="submit"
                value="Save Score and Create User"
                variant="primary"
                size="lg"
              />
            </form>
          </Modal.Body>

          <Modal.Footer>Create an account to save your score.</Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  );
}
 
export default MainPage;