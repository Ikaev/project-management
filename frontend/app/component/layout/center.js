import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function CenterPanelLayout(props) {
  const {
    children,
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
    <Box pt={14} width={1200} m='auto'>
      <Title/>
      {children}
    </Box>
  );
}

export default CenterPanelLayout;