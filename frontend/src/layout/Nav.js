import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textTransform: "none",
  },
}));

function Nav() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
            <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Book Database
          </Typography>
          <Button className={classes.button} color="inherit">
            <Link to="/books">Books</Link>
          </Button>
          <Button className={classes.button} color="inherit">
            <Link to="/register">Register</Link>
          </Button>
          <Button className={classes.button} color="inherit">
            <Link to="/login">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
