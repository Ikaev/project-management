import React from 'react';
import { Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  labelItem: {
    textTransform: 'capitalize'
  }
}));

export default function DescriptionItemComponent(props) {
  const { label, value } = props;
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={5} className={classes.root}>
        <Typography variant='subtitle2'>{label}</Typography>
      </Grid>
      <Grid item xs={7}>
        <Typography variant='body2'>{value || 'Нет данных'}</Typography>
      </Grid>
    </Grid>
  )
}