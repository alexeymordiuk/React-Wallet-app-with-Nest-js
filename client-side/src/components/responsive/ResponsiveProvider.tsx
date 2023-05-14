import { createContext, FC, ReactNode, useContext } from "react";
import useMediaQueryMui from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

export interface ResponsiveContextType {
  isXl: boolean;
  isLg: boolean;
  isMd: boolean;
  isSm: boolean;
  isXs: boolean;
}

export const ResponsiveContext = createContext<ResponsiveContextType>({
  isXl: true,
  isLg: false,
  isMd: false,
  isSm: false,
  isXs: false,
});

export const ResponsiveProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const value: ResponsiveContextType = {
    isXl: useMediaQueryMui(theme.breakpoints.up('xl')),
    isLg: useMediaQueryMui(theme.breakpoints.up('lg')),
    isMd: useMediaQueryMui(theme.breakpoints.down('md')),
    isSm: useMediaQueryMui(theme.breakpoints.down('sm')),
    isXs: useMediaQueryMui(theme.breakpoints.up('xs'))
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export function useResponsive() {
  return useContext(ResponsiveContext);
}
