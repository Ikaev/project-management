import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Workspace() {
  return (
    <Switch>
      <Route exact path='/projects'>
        <h4>Список проектов</h4>
      </Route>
      <Route exact path='/employees'>
        <h4>Список сотрудников</h4>
      </Route>
    </Switch>
  )
}