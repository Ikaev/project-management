import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const CreateFormPageCore = (props) => {
  const { children } = props;
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      {children}
    </Paper>
  )
};
export default CreateFormPageCore
