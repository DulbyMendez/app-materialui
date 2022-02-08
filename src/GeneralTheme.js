import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";

const theme = createTheme({
    palette: {
      primary: {
        main: purple[200],
      },
      secondary: {
        main: green[500],
      },
    },
});

export default theme;