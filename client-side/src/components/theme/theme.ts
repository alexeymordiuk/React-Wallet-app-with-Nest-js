import { CSSProperties } from "react";

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      black: CSSProperties['color'];
      beige: CSSProperties['color'];
      red: CSSProperties['color'];
      yellow: CSSProperties['color'];
      brown: CSSProperties['color'];
      green: CSSProperties['color'];
      pink: CSSProperties['color'];
      blue: CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    colors: {
      black: CSSProperties['color'];
      beige: CSSProperties['color'];
      red: CSSProperties['color'];
      yellow: CSSProperties['color'];
      brown: CSSProperties['color'];
      green: CSSProperties['color'];
      pink: CSSProperties['color'];
      blue: CSSProperties['color'];
    };
  }

  interface TypographyVariants {
    accent1: CSSProperties;
    accent2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    accent1: CSSProperties;
    accent2: CSSProperties;
  }

}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    accent1: true;
    accent2: true;
  }
}
