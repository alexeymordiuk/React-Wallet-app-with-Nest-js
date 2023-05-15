import { CSSProperties } from "react";

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      black: CSSProperties['color'];
      white: CSSProperties['color'];
      green: CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    colors: {
      black: CSSProperties['color'];
      white: CSSProperties['color'];
      green: CSSProperties['color'];
    
    };
  }

  interface TypographyVariants {
    accent1: CSSProperties;
    accent2: CSSProperties;
    accent3: CSSProperties;
    text1: CSSProperties;
  }

  interface TypographyVariantsOptions {
    accent1: CSSProperties;
    accent2: CSSProperties;
    accent3: CSSProperties;
    text1: CSSProperties;
  }

}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    accent1: true;
    accent2: true;
    accent3: true;
    text1: true;
  }
}
