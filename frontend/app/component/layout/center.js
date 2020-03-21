import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button } from '@material-ui/core';

const Title = ({title}) => {
  return (
    <Box mb={2}>
      <Typography variant='h4' display='inline'>{title}</Typography>
    </Box>
  );
};
const CenterPanelLayout = props => {
  const {
    children,
    handleClick,
    buttonColor,
    buttonTitle,
    title,
  } = props;

  return (
    <Box pt={10} width={1200} m='auto'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        {title ? <Title title={title}/> : null}
        {buttonTitle ? <Button variant='contained' color={buttonColor} onClick={handleClick}>{buttonTitle}</Button> : null}
      </Box>
      {children}
    </Box>
  );
};

export default CenterPanelLayout;