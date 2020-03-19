import React from 'react';
import { Typography, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  }
}));

export default function DescriptionHeaderComponent(props) {
  const classes = useStyle();
  const {
    label
  } = props;

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Typography variant='h5'>{label}</Typography>
      </Box>
    </React.Fragment>
  )
}