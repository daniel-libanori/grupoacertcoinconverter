import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

import NavBar from '../components/navbar/navbar'

interface INTFAuthedRoute{
  component: any;
  path?: string;
}

const PrivateRoute : React.FC <INTFAuthedRoute>= ({ component: RouteComponent, ...other }) => {
  const {user} = useContext(AuthContext);

  const tabsAndLinks = [{tab:"Carteira", link:"/wallet"},{tab:"Fazer Conversão", link:"/transactions"},{tab:"Extrato", link:"/extract"} ]

  return (
    <>
      {!!user ? <NavBar tabsAndLinks={tabsAndLinks}/> : null}
      <Route
        render={(routeProps) =>
          !!user ? <RouteComponent {...routeProps} /> : <Redirect to="/" />
        }
        {...other}
      />
    </>
  );
};
export default PrivateRoute;