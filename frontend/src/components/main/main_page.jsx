import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const MainPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email: email, password: password},"--submitted!")
    // debugger
    // DO ADD ONCE WE HAVE CONTAINER
    // props.login({email: email, password: password});
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
      </div>
    );
}
 
export default MainPage;