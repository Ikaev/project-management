import React from 'react';
import { Typography, Divider, Box } from '@material-ui/core';

export default function DescriptionHeaderComponent(props) {
  const {
    label
  } = props;

  return (
    <React.Fragment>
      <Box>
        <Typography variant='h5'>{label}</Typography>
      </Box>
    </React.Fragment>
  )
}