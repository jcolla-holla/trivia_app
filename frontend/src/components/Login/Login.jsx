import React, {useState} from "react"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const Login = (props) => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

    const handleStartGameSubmit = (e) => {
        e.preventDefault();
        props.login({ email: email, password: password });

        // roundabout way to close the Login modal
        window.location.hash = "#/";
    };

      return (
        <Modal id="login-modal" show backdrop="static">
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
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
          </Modal.Body>
          <Modal.Footer>
            <div className="modal-footer-info">
              <span>
                Logging in allows you to save your scores.
              </span>
            </div>
          </Modal.Footer>
        </Modal>
      );
}

export default Login