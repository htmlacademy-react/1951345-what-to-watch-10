import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, } from '../../const';

import type { PrivateRouteProps } from '../../types/types';

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
