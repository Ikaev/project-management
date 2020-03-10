import React from "react";
import TopPanel from './component/ui/top_panel';
import LeftPanel from './component/ui/left_panel';
import Workspace from './component/ui/workspace';


export default function App() {
  return (
    <React.Fragment>
      <TopPanel/>
      <LeftPanel/>
      <Workspace/>
    </React.Fragment>
  )
}