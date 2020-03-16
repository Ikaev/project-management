import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import FormCreateProject from 'page/project/create';
import ProjectListPage from 'page/project/list';

export default function Workspace() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/project/create');
  };
  return (
    <Switch>
      <Route exact path='/projects'>
        <ProjectListPage/>
      </Route>
      <Route exact path='/project/create'>
        <FormCreateProject/>
      </Route>
      <Route exact path='/employees'>
        <h4>Список сотрудников</h4>
      </Route>
    </Switch>
  )
}