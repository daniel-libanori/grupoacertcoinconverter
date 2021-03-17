import React from 'react'
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom'

/*Pages*/
import Signin from "../pages/signin/signin"
import Signup from "../pages/signup/signup"
import Wallet from '../pages/wallet/Wallet'
import Transactions from '../pages/transactions/transactions'
import Extract from '../pages/extract/Extract'

import PrivateRoute from './PrivateRoute'

const Routes : React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/signin" />}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <PrivateRoute path="/wallet" component={Wallet}/>
                <PrivateRoute path="/transactions" component={Transactions}/>
                <PrivateRoute path="/extract" component={Extract}/>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;