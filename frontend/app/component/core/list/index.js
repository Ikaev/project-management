import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { getListItemsSelector } from './duck';
import { useHistory } from 'react-router-dom';

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
  emptyList: {
    padding: theme.spacing(1),
    background: theme.palette.grey[200],
  },
}));


const ListComponent = props => {
  const { headers, getData, Item } = props;

  const dispatch = useDispatch();
  const items = useSelector(getListItemsSelector);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(getData(history));
  }, []);
  const EmptyListComp = () => {
    return (
      <Paper className={classes.emptyList}>
        <Typography>Список пуст</Typography>
      </Paper>
    )
  };
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
      {items.length
        ? items.map(item => <Item key={item._id} item={item}/>)
        : <EmptyListComp/>
      }

    </React.Fragment>
  )
};

export default ListComponent
