import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./main/main_page_container";
import Login from "./Login/Login_container";

const App = () => (
  <div id="app-container">
    <Route path="/" component={MainPage} />
    <Route path="/login" component={Login} />
    <footer id="footer">
      <div>
        <a href="https://jessecolligan.com/">
          Copyright &copy; 2020 Jesse Colligan
        </a>
      </div>
    </footer>
  </div>
);

export default App;
