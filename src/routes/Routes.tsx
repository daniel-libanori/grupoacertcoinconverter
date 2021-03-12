import React from 'react'
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom'

/*Pages*/
import Home from "../pages/home/home"
import Signup from "../pages/signup/signup"
import Wallet from '../pages/wallet/Wallet'

const Routes : React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/home" />}/>
                <Route path="/home" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/wallet" component={Wallet}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;