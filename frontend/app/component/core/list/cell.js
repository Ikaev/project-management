import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  }
}));
const ListCellComponent = props => {
  const { children } = props;
  const classes =  useStyle();
  return (
    <Grid item {...props}>
      <Box className={classes.root}>
        {children}
      </Box>
    </Grid>
  )
};

export default ListCellComponent