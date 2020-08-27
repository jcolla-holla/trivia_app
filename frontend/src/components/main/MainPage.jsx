import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import GameOver from "../GameOver/GameOver_container.js"
import Modal from "react-bootstrap/Modal";
import NavBar from "../NavBar/NavBar_container"
import Questions from "../Questions/Questions"

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
    setEmail("");
    setPassword("");
  }

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    props.signup({ email: email, password: password, handle: handle });
    // setIsDemoUser(false)
    setEmail("");
    setPassword("");
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

  const sessionErrors = (
      Object.values(props.sessionErrors).map((error, idx) => {
        return <li key={idx}>{error}</li>
    })
  )

  return (
    <div id="main-page">
      <NavBar setIsDemoUser={setIsDemoUser} />

      {(isDemoUser || props.isAuthenticated) && !gameOver && (
        <Questions
          isAuthenticated={props.isAuthenticated}
          questions={props.questions}
          score={score}
          questionsSubmitted={questionsSubmitted}
          updateScore={updateScore}
          incrementQuestionsSubmitted={incrementQuestionsSubmitted}
          setGameOver={setGameOver}
        />
      )}

      {gameOver && (
        <GameOver
          isDemoUser={isDemoUser}
          startNewRound={startNewRound}
          score={score}
          questionsSubmitted={questionsSubmitted}
          setIsDemoUser={setIsDemoUser}
        />
      )}

      {!isDemoUser && !props.isAuthenticated && !gameOver && (
        <Modal id="login-modal" show backdrop="static">
          <Modal.Header>
            <Modal.Title>Let's Play TrustLayer Trivia!</Modal.Title>
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
              <div className="buttons-row">
                <Button
                  as="input"
                  type="submit"
                  value="Login"
                  variant="primary"
                  size="lg"
                  disabled={email.length > 0 ? password.length === 0 : true}
                />

                <Button
                  as="input"
                  type="button"
                  onClick={(e) => handleDemo(e)}
                  value="Continue as Guest"
                  variant="secondary"
                  size="lg"
                />
              </div>
            </form>

            <ul className="session-errors">{sessionErrors}</ul>
          </Modal.Body>
          <Modal.Footer>
            <div className="modal-footer-info">
              <span>
                As a Guest, you can create an account later to save your score.
              </span>
            </div>
          </Modal.Footer>
        </Modal>
      )}

      {isDemoUser && !props.isAuthenticated && gameOver && (
        <Modal id="create-account-modal" show backdrop="static">
          <Modal.Header>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleCreateAccountSubmit}>
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
              <div className="buttons-row">
                <Button
                  as="input"
                  type="submit"
                  value="Create Account"
                  variant="primary"
                  size="lg"
                  disabled={
                    email.length > 0 && handle.length > 0
                      ? password.length === 0
                      : true
                  }
                />
              </div>
            </form>
            <ul className="session-errors">{sessionErrors}</ul>
          </Modal.Body>
          <Modal.Footer>
            <div className="modal-footer-info">
              <span>
                Create an account to then save your score.
              </span>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
 
export default MainPage;