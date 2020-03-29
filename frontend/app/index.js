import React, { useEffect } from "react";
import TopPanel from './component/ui/top_panel';
import LeftPanel from './component/ui/left_panel';
import Workspace from './component/ui/workspace';
import { useDispatch } from 'react-redux';
import { getAuthUserAction } from 'module/auth/duck';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUserAction())
  }, []);
  return (
    <React.Fragment>
      <TopPanel/>
      <LeftPanel/>
      <Workspace/>
    </React.Fragment>
  )
}