import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getAuthUserSelector } from 'module/auth/duck'

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const HomePageModule = () => {
  const authUser = useSelector(getAuthUserSelector);
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography variant='h3'>
        {authUser ? `Добро пожаловать ${authUser.firstName}!` : 'Добро пожаловать!'}
      </Typography>
      <Typography variant='subtitle1'>
        {!authUser ? 'Для работы в системе пожалуйста авторизуйтесь!' : 'null'}
      </Typography>
    </Box>
  )
};

export default HomePageModule