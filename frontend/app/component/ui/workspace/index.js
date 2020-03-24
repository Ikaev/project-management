import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormCreateProjectPage from 'page/project/create';
import ProjectListPage from 'page/project/list';
import ProjectDescriptionPage from 'page/project/description';
import ContractorListPage from 'page/contractor/list';
import FormCreateContractorPage from 'page/contractor/create'
import ContractorDescriptionPage from 'page/contractor/description';
import AuthUserPage from 'page/auth';

const Workspace = () => {
  return (
    <Switch>
      <Route
        exact
        path='/auth'
        component={AuthUserPage}
      />
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
        component={FormCreateProjectPage}
      />
      <Route exact
             path='/contractors'
             component={ContractorListPage}
      />
      <Route
        exact
        path='/contractors/:id/description'
        render={(props) => <ContractorDescriptionPage {...props}/>}
      />
      <Route exact
             path='/contractors/create'
             component={FormCreateContractorPage}
      />
    </Switch>
  )
};

export default Workspace