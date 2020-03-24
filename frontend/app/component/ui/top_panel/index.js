import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { showNavigation } from 'module/navigation/duck';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopPanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleShowNavigationPanel = () => dispatch(showNavigation());
  const handleLoginButton = () => history.push('/auth');

  return(
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleShowNavigationPanel} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Project management
          </Typography>
          <Button onClick={handleLoginButton} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default TopPanel