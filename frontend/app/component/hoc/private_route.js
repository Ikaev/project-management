import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthUserSelector, getFetching } from 'module/auth/duck';

const PrivateRoute = ({component: Component, ...rest}) => {
  const authUser = true;
  const fetching = useSelector(getFetching);

  return (
    <Route {...rest} render={(props) => (
      authUser || fetching
        ? <Component {...props}/>
        : <Redirect to={{
          pathname: '/auth',
          state: { from: props.location}
        }}/>
    )}/>
  )
};

export default PrivateRoute