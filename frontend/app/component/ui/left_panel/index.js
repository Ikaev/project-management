import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Drawer, IconButton, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import Navigation from 'module/navigation';
import { getIsOpenSelector, hideNavigation } from 'module/navigation/duck';
import theme from '../../../theme';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 250,
  }

}));

const LeftPanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsOpenSelector);
  const handleCloseBtnClick = () =>  dispatch(hideNavigation());

  return(
    <Drawer
      anchor='left'
      open={isOpen}
      transitionDuration={{enter: 400, exit: 200}}
      onEscapeKeyDown={handleCloseBtnClick}
      onBackdropClick={handleCloseBtnClick}
      classes={{
        paper: classes.drawer,
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='space-between' p={1}>
        <Typography variant='h5' display='inline'>Меню</Typography>
        <Box ml={1}>
          <IconButton onClick={handleCloseBtnClick}>
            <Clear />
          </IconButton>
        </Box>
      </Box>
      <Divider/>
      <Box>
        <Navigation/>
      </Box>
    </Drawer>
  )
};

export default LeftPanel