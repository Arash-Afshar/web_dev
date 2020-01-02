import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1 :{
      fontSize: "4em",
    },
    h2: {
      fontSize: "3.8em",
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1100,
      xl: 1920,
    }
  }
});

export default theme;
