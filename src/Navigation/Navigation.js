import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "../Login/Login";
import { Register } from "../Register/Register";
export const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/register"> 
        <Register/>
        </Route>
      </Switch>
    </Router>
  );
};
