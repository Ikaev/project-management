import React from 'react';
import { Box, Drawer, IconButton, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons';

export default function LeftPanel() {

  return(
    <Drawer anchor='left'>
      <Box display='flex' alignItems='center' p={2}>
        <Typography variant='h5' display='inline'>Меню навигации</Typography>
        <Box ml={1}>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  )
}