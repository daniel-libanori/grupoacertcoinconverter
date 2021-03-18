import React, {useContext, useEffect} from 'react'

/*Components*/
import Routes from './routes/Routes'
import Logo from './components/logo/logo'
import NavBar from './components/navbar/navbar'

/* HOC and Context*/
import CustomThemeProvider from './styles/globalTheme'
import {AuthProvider, AuthContext} from './contexts/authContext'
import {MoneyProvider} from './contexts/moneyContext'

import './styles/globalCss.css'

/* HOC Component Holder and Fixed Header*/
const App : React.FC = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className="global">
      <AuthProvider>
        <MoneyProvider>
          <CustomThemeProvider>
            <Logo/>
            
            <Routes/>
          </CustomThemeProvider>
        </MoneyProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
