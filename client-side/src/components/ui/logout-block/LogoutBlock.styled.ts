import { Theme, Typography, TypographyProps, styled } from "@mui/material";

export const LogoutBlockStyled = styled('div')<{ theme?: Theme }>(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '25px',
   alignItems: 'center',
   textAlign: 'center'
  }))

export const LogoutBlockTitle = styled(Typography)<TypographyProps & { theme?: Theme, component?: string }>(({ theme }) => ({
    color: theme.colors.white
}))

export const LogOutButton = styled('button')<{ theme?: Theme }>(({ theme }) => ({
    display: 'inline-block',
    padding: '10px 0px',
    maxWidth: '150px',
    width: '100%',
    background: theme.colors.green,
    color: theme.colors.white,
    fontSize: '22px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out',

    ":hover": {
        background: theme.colors.black
    },
}))