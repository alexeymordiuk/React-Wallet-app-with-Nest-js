import { Theme, Typography, TypographyProps, styled } from "@mui/material";

export const CategoryIconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
});

export const CategoryTitleStyled = styled(Typography)<TypographyProps & { theme?: Theme, component?: string }>(({ theme }) => ({
    color: theme.colors.white
}))

export const CategoryIconCircle = styled('p')({
    borderRadius: '50%',
    height: '40px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#49816e',
});