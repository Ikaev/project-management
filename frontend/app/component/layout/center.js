import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button } from '@material-ui/core';

function CenterPanelLayout(props) {
  const {
    children,
    handleClick,
    buttonColor,
    buttonTitle,
    title,
  } = props;

  function Title() {
    if(!title) return null;

    return (
      <Box mb={2}>
        <Typography variant='h4' display='inline'>{title}</Typography>
      </Box>
    );
  }

  return (
    <Box pt={10} width={1200} m='auto'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Title/>
        <Button variant='contained' color={buttonColor} onClick={handleClick}>{buttonTitle}</Button>
      </Box>
      {children}
    </Box>
  );
}

export default CenterPanelLayout;