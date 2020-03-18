import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { getListItemsSelector } from './duck';

const useStyles = makeStyles(theme => ({
  headersCont: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[50],
  },
  headerItem: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),

    '&:first-letter': {
      textTransform: 'uppercase'
    }
  },
}));

export default function ListComponent(props) {
  const { headers, getData, Item } = props;

  const dispatch = useDispatch();
  const items = useSelector(getListItemsSelector);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getData());
  }, []);

  function Headers() {
    return (
      <Paper className={classes.headersCont}>
        <Grid container>
          {
            headers.map((item, index) => {
              return (
                <Grid key={index} item xs={item.size}>
                  <Box className={classes.headerItem}>
                    <Typography variant='subtitle1'>{item.label}</Typography>
                  </Box>
                </Grid>
              )
            })
          }
        </Grid>
      </Paper>
    )
  }

  return (
    <React.Fragment>
      <Headers />
      {items.map(item => <Item key={item._id} item={item}/>)}
    </React.Fragment>
  )
}