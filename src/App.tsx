import React, {useContext, useEffect} from 'react'

/*Components*/
import Routes from './routes/Routes'
import Logo from './components/logo/logo'
import NavBar from './components/navbar/navbar'

/* HOC and Context*/
import CustomThemeProvider from './styles/globalTheme'
import {AuthProvider, AuthContext} from './contexts/authContext'

/* HOC Component Holder and Fixed Header*/
const App : React.FC = () => {

  const {user} = useContext(AuthContext)

  return (
    <>
      <AuthProvider>
        <CustomThemeProvider>
          <Logo/>
          <NavBar tabs={["Carteira","Fazer Conversão", "Extrato"]}/>
          <Routes/>
        </CustomThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
