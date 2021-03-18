import React from 'react'

/*Components*/
import Routes from './routes/Routes'
import Logo from './components/logo/logo'

/* HOC and Context*/
import CustomThemeProvider from './styles/globalTheme'
import {AuthProvider} from './contexts/authContext'
import {MoneyProvider} from './contexts/moneyContext'

import './styles/globalCss.css'

/* HOC Component Holder and Fixed Header*/
const App : React.FC = () => {

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
