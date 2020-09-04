import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import GameOver from "../GameOver/GameOver_container.js"
import Modal from "react-bootstrap/Modal";
import NavBar from "../NavBar/NavBar_container"
import Questions from "../Questions/Questions"
import Alert from "react-bootstrap/Alert";

const MainPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [handle, setHandle] = useState("")
  const [score, setScore] = useState(24)
  const [questionsSubmitted, setQuestionsSubmitted] = useState(0)
  const [gameOver, setGameOver] = useState(false);
  const [isDemoUser, setIsDemoUser] = useState(false)
  const [isScoreSaved, setIsScoreSaved] = useState(false)
  const [isOnMobile, setIsOnMobile] = useState(false)

  // ComponentDidMount effect - fetch 10 questions immediately upon mounting
  useEffect(() => {
    props.fetchQuestions()

    // check if on mobile or tablet or not
    // source: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    window.mobileAndTabletCheck = function () {
      let check = false;
      (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };

    if (window.mobileAndTabletCheck()) {
      setIsOnMobile(true);
    }
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
    setIsScoreSaved(false)
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
      <NavBar setIsDemoUser={setIsDemoUser} gameOver={gameOver} isOnMobile={isOnMobile} />
      <div id="alert-msg">
        {isScoreSaved && (
          <Alert variant="success">
            <strong>Score saved successfully!</strong> &nbsp; If it is a
            personal top ten score it will appear in your top scores.
          </Alert>
        )}

        {questionsSubmitted === 9 && (
          <Alert variant="warning">
            <strong>One question left!</strong> &nbsp; Submit your last answer
            to see your final score.
          </Alert>
        )}
      </div>

      {(isDemoUser || props.isAuthenticated) && !gameOver && (
        <Questions
          isAuthenticated={props.isAuthenticated}
          questions={props.questions}
          score={score}
          questionsSubmitted={questionsSubmitted}
          updateScore={updateScore}
          incrementQuestionsSubmitted={incrementQuestionsSubmitted}
          setGameOver={setGameOver}
          setIsScoreSaved={setIsScoreSaved}
          fetchQuestions={props.fetchQuestions}
        />
      )}

      {gameOver && (
        <GameOver
          isDemoUser={isDemoUser}
          startNewRound={startNewRound}
          score={score}
          questionsSubmitted={questionsSubmitted}
          setIsDemoUser={setIsDemoUser}
          setIsScoreSaved={setIsScoreSaved}
        />
      )}

      {!isDemoUser && !props.isAuthenticated && !gameOver && !isOnMobile && (
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

      {isOnMobile && 
        <Modal id="login-modal" show backdrop="static">
          <Modal.Header>
            <Modal.Title>It looks like you're on mobile</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>Open this game on a desktop browser in order to play.</div>
          </Modal.Body>
        </Modal>}

      {isDemoUser && !props.isAuthenticated && gameOver && !isScoreSaved && (
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
              <span>Create an account to then save your score.</span>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
 
export default MainPage;