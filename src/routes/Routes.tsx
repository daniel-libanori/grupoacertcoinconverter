import React from 'react'
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom'

/*Pages*/
import Signin from "../pages/signin/signin"
import Signup from "../pages/signup/signup"
import Wallet from '../pages/wallet/Wallet'
import Transactions from '../pages/transactions/transactions'

const Routes : React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/signin" />}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/wallet" component={Wallet}/>
                <Route path="/transactions" component={Transactions}/>
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;