import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Questions from "../questions/questions"

const MainPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [score, setScore] = useState(0)
  const [questionsSubmitted, setQuestionsSubmitted] = useState(0)
  // const [isDemoUser, setIsDemoUser] = useState(false)

  // ComponentDidMount effect - fetch 10 questions immediately upon mounting
  useEffect(() => {
    props.fetchQuestions()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login({email: email, password: password});
  }

  const updateScore = (points) => {
    setScore(score + points)
  }

  const incrementQuestionsSubmitted = () => {
    setQuestionsSubmitted(questionsSubmitted + 1)
  }

  const handleDemo = (e) => {

    e.preventDefault();
    props.login({ email: "jesse.m.colligan@gmail.com", password: "password" });
    // setIsDemoUser(true)
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

      {props.isAuthenticated && (
        <Questions
          questions={props.questions}
          score={score}
          questionsSubmitted={questionsSubmitted}
          updateScore={updateScore}
          incrementQuestionsSubmitted={incrementQuestionsSubmitted}
        />
      )}
    </div>
  );
}
 
export default MainPage;