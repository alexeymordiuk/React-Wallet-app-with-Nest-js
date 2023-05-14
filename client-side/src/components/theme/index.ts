import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { colors } from "./colors";


export const theme = createTheme({
    colors,
    typography,
    breakpoints: {
      values: {
        xs: 0,
        sm: 680,
        md: 900,
        lg: 1100,
        xl: 1164,
      },
    },
  });