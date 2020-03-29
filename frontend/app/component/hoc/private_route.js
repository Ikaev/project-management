import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthUserSelector } from 'module/auth/duck';

const PrivateRoute = ({component: Component, ...rest}) => {
  const authUser = useSelector(getAuthUserSelector);

  return (
    <Route {...rest} render={(props) => (
      authUser
        ? <Component {...props}/>
        : <Redirect to={{
          pathname: '/auth',
          state: { from: props.location}
        }}/>
    )}/>
  )
};

export default PrivateRoute