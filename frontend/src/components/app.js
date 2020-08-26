import React from "react";
import { Route } from "react-router-dom";
import MainPageContainer from "./main/main_page_container";
import NavBar from "./NavBar";

const App = () => (
  <div id="app-container">
    <NavBar/>
    <Route exact path="/" component={MainPageContainer} />
    <footer id="footer">
      <div> Copyright &copy; 2020 Jesse Colligan</div>
    </footer>
  </div>
);

export default App;
