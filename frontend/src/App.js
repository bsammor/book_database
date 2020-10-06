import React from "react";
import Routes from "./routes";
import Nav from "./layout/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
