import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),

    '&:nth-child(2n - 1)': {
      backgroundColor: theme.palette.grey[100]
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
      cursor: 'pointer',
    }
  },

}));

const ListItemComponent = props => {
  const { children, onClick } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root} onClick={onClick}>
      <Grid container>
        {children}
      </Grid>
    </Paper>
  )
};

export default ListItemComponent