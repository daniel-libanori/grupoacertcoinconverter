import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      color: theme.status.danger,
      '&$checked': {
        color: theme.status.danger,
      },
    },
    checked: {},
  }),
);

function CustomCheckbox() {
  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  );
}

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

const CustomStyles: React.FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}
export default CustomStyles