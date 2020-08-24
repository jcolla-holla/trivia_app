import React, { useState } from "react";

const MainPage = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email: email, password: password},"--submitted!")
    debugger
    // DO ADD ONCE WE HAVE CONTAINER
    // props.login({email: email, password: password});
  }

    return (
      <div id="main-page">
        <h1>Welcome to TrustLayer Trivia</h1>
        <div>email you typed is: {email}</div>
        <div>password you typed is: {password}</div>
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
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
}
 
export default MainPage;