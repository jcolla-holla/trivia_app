import React, {useState, useEffect} from "react"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
      props.clearErrors()
    }, [])

    const handleStartGameSubmit = (e) => {
        e.preventDefault();
        props.login({ email: email, password: password });
    };

    const returnToGame = () => {
      // roundabout simple way to close the Login modal and maintain the structure to trigger its load in the future
      window.location.hash = "#/";
    }

    const sessionErrors = Object.values(props.sessionErrors).map((error) => {
      return <li>{error}</li>;
    });

    return (
      <Modal id="login-modal" show={!props.isAuthenticated} onExited={() => returnToGame()} onHide={() => returnToGame()}>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
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
            </div>
          </form>
          <ul className="session-errors">{sessionErrors}</ul>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-footer-info">
            <span>
              Log in to save scores. Click anywhere to continue as Guest.
            </span>
          </div>
        </Modal.Footer>
      </Modal>
    );
}

export default Login