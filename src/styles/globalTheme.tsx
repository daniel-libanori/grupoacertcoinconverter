import React from 'react';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTextField: {
      // Name of the rule
      root: {
        maxWidth: "80%" ,
        height: 48
      },
      
    },
  },
});

const CustomThemeProvider: React.FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}
export default CustomThemeProvider