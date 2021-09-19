import { createTheme } from "@mui/material/styles";
import { colors } from '@mui/material';

const mainTheme = createTheme ({
    palette: {
        primary: {
            contrastText: '#FFFFFF',
            dark: "#3A3FB2",
            main: '#545bff',
            light: "#767BFF"
        },
        secondary: {
            contrastText: '#FFFFFF',
            dark: "#000000",
            main: '#333333',
            light: "#777777"
        },
        action: {
          disabledBackground: '#333333',
          disabled: '#777777',
        }
    },
    overrides: {
      MuiButton: {
        contained: {
          textTransform: 'lowercase',
        },
      },
    },
});

export { mainTheme };