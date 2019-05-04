import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Login from '../Login';


const Header = props => {
  const { classes } = props;

  return (
    <div className={classes && classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes && classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
