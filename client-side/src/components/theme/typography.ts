import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Palette } from "@mui/material/styles/createPalette";

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  accent1: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '23px',
    lineHeight: 1.085,
    letterSpacing: '0.5px'
  },
  accent2: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: 1.085,
    letterSpacing: '0.5px'
  },
  accent3: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '27px',
    lineHeight: 1.085,
    letterSpacing: '0.5px'
  },
  text1: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: 1.085,
    letterSpacing: '0.5px'
  },
}