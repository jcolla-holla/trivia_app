import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const MainPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [score, setScore] = useState(0)

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

  const questionList = props.questions.map((question,idx) => {
    return (<li key={idx}>
      {question.question}
    </li>)
  })

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

      <ul>
        <li>questions will appear here</li>
        {/* {questionList} */}
      </ul>

      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
 
export default MainPage;