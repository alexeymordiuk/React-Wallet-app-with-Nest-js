import { Theme, Typography, TypographyProps, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const LoginEmptyBlockStyled = styled('div')<{ theme?: Theme }>(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '20px',
   flexDirection: 'column',
   height: 'calc(100vh - 150px)',
   textAlign: 'center'
}))

export const LoginEmptyBlockTitle = styled(Typography)<TypographyProps & { theme?: Theme, component?: string }>(({ theme }) => ({
    color: theme.colors.white
}))

export const LoginEmptyBlockLink = styled(Link)<{ theme?: Theme }>(({ theme }) => ({
   padding: '10px 0',
   background: theme.colors.green,
   maxWidth: '170px',
   width: '100%',
   color: theme.colors.white,
   transition: 'background 0.3s ease-in-out',

   "&:hover": {
    background: theme.colors.black
   }
}))