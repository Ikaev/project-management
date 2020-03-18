import React from 'react';
import { Typography, Grid } from '@material-ui/core';


export default function DescriptionItemComponent(props) {
  const { label, value } = props;
  return (
    <Grid container>
      <Grid item xs={5}>
        <Typography variant='subtitle2'>{label}</Typography>
      </Grid>
      <Grid item xs={7}>
        <Typography variant='body2'>{value}</Typography>
      </Grid>
    </Grid>
  )
}