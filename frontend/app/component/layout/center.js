import React from 'react';
import { Box, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1)
  },
  buttonCont: {
    textAlign: 'end',
  }
}));

const Title = ({title}) => {
  return (
    <Box>
      <Typography variant='h4' display='inline'>{title}</Typography>
    </Box>
  );
};
const CenterPanelLayout = props => {
  const classes = useStyle();
  const {
    children,
    handleClick,
    buttonColor,
    buttonTitle,
    title,
  } = props;

  return (
    <Box pt={10} width={1200} m='auto'>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          {title ? <Title title={title}/> : null}
        </Grid>
        <Grid className={classes.buttonCont} item xs={6}>
          {buttonTitle ? <Button variant='contained' color={buttonColor} onClick={handleClick}>{buttonTitle}</Button> : null}
        </Grid>
      </Grid>
      {children}
    </Box>
  );
};

export default CenterPanelLayout;