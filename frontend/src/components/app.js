import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import MainPageContainer from "./main/main_page_container";

const App = () => (
  <div id="app-container">
    <Switch>
      <Route exact path="/" component={MainPageContainer} />
    </Switch>
    <footer id="footer">
      <div> Copyright &copy; 2020 Jesse Colligan</div>
    </footer>
  </div>
);

export default App;
