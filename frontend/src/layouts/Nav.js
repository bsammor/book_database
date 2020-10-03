import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "10vh",
    background: "rgb(73, 79, 82)",
    color: "white;",
  },
  navLinks: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navStyle: {
    color: "green",
  },
});

function Nav() {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <h3>Logo</h3>
      <ul className={classes.navLinks}>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link className={classes.navStyle} to="/register">
          <li>Register</li>
        </Link>
        <Link to="/books">
          <li>Books</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
