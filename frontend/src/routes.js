import { Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import BooksView from "./views/BooksView";
import React from "react";

function Routes(props) {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/books" component={BooksView} />
      </Switch>
    </>
  );
}

export default Routes;
