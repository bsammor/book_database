import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Books from "./views/Books";
import Nav from "./layouts/Nav";

function Routes() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/books" component={Books} />
      </Switch>
    </>
  );
}

export default Routes;
