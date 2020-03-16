import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),

    '&:nth-child(2n - 1)': {
      backgroundColor: theme.palette.background.secondChild
    },
  },

}));

export default function ListItemComponent(props) {
  const { children, onClick } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root} onClick={onClick}>
      <Grid container>
        {children}
      </Grid>
    </Paper>
  )

}