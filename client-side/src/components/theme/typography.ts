import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Palette } from "@mui/material/styles/createPalette";

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  accent1: {
    fontFamily: 'Clash Display',
    fontWeight: 600,
    fontSize: '60px',
    lineHeight: 1.085,
    letterSpacing: '0.5px'
  },
  accent2: {
    fontFamily: 'Clash Display',
    fontWeight: 600,
    fontSize: '60px',
    lineHeight: 1.085,
    letterSpacing: '0.5px'
  },
}