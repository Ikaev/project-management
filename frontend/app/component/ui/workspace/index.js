import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormCreateProject from 'page/project/create';
import ProjectListPage from 'page/project/list';
import ProjectDescriptionPage from 'page/project/description';
import ContractorListPage from 'page/contractor/list';

export default function Workspace() {
  return (
    <Switch>
      <Route
        exact
        path='/projects'
        component={ProjectListPage}

      />
      <Route exac
             path='/projects/:id/description'
             render={(props) => <ProjectDescriptionPage {...props}/>}
      />
      <Route
        exact
        path='/projects/create'
        component={FormCreateProject}
      />
      <Route exact path='/employees'>
        <h4>Список сотрудников</h4>
      </Route>
      <Route exact
             path='/contractors'
             component={ContractorListPage}
      />
    </Switch>
  )
}