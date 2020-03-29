import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const HomePageModule = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography variant='h3'>
        Добро пожаловать!
      </Typography>
      <Typography variant='subtitle1'>
        Для работы в системе пожалуйста авторизуйтесь!
      </Typography>
    </Box>
  )
};

export default HomePageModule