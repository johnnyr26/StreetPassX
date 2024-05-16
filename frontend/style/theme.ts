import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}



export const theme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        }
    },
    palette: {
        primary: {
            main: '#891F42',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#bfb182'
        }
    }
});