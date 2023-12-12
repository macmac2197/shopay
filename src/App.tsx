import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import EmptyPage from "./components/EmptyPage/EmptyPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/empty" component={EmptyPage} />
      </Switch>
    </Router>
  );
};
export default App;
