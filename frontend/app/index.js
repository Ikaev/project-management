import React, { useEffect } from "react";
import TopPanel from './component/ui/top_panel';
import LeftPanel from './component/ui/left_panel';
import Workspace from './component/ui/workspace';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserAction, getFetching } from 'module/auth/duck';
import { Typography } from '@material-ui/core';

export default function App() {
  const dispatch = useDispatch();
  const fetching = useSelector(getFetching);
  useEffect(() => {
    dispatch(getAuthUserAction())
  }, []);
  return (
      fetching
      ? <Typography>Loading</Typography>
      : (<React.Fragment>
        <TopPanel/>
        <LeftPanel/>
        <Workspace/>
      </React.Fragment>)
  )
}