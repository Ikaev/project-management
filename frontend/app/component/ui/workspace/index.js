import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormCreateProjectPage from 'page/project/create';
import ProjectListPage from 'page/project/list';
import ProjectDescriptionPage from 'page/project/description';
import ContractorListPage from 'page/contractor/list';
import FormCreateContractorPage from 'page/contractor/create';
import ContractorDescriptionPage from 'page/contractor/description';
import AuthUserPage from 'page/auth';
import HomePage from 'page/home';
import PrivateRoute from 'hoc/private_route';

const Workspace = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={HomePage}
      />
      <Route
        exact
        path='/auth'
        component={AuthUserPage}
      />
      <PrivateRoute
        exact
        path='/projects'
        component={ProjectListPage}
      />
      <PrivateRoute
        exact
        path='/projects/:id/description'
        component={ProjectDescriptionPage}
      />
      <PrivateRoute
        exact
        path='/projects/create'
        component={FormCreateProjectPage}
      />
      <PrivateRoute
        exact
        path='/contractors'
        component={ContractorListPage}
      />
      <PrivateRoute
        exact
        path='/contractors/:id/description'
        component={ContractorDescriptionPage}
      />
      <PrivateRoute
        exact
        path='/contractors/create'
        component={FormCreateContractorPage}
      />
    </Switch>
  );
};

export default Workspace;