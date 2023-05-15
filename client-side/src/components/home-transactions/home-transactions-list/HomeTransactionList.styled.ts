import { Theme, Typography, TypographyProps, styled } from "@mui/material";

export const HomeTransactionWrapper = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  width: '100%',
  gap: '30px 40px',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const HomeTransactionListStyled = styled('ul')({
    width: '100%',
    maxWidth: '1000px',
    padding: '20px',
    borderRadius: '20px',
    height: 'calc(100vh - 150px)',
    background: 'rgba(35,35,35,255)',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'none'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#1d1d1d',
      width: '1px',
      borderRadius: '12px'
    },
  
    [`@media (max-width: 750px)`]: {
      height: 'calc(100vh - 400px)',
    },
  });

  export const HomeTransactionListItemStyled = styled('li')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0 15px',
    background: '#1d1d1d',
    borderRadius: '15px',
    width: "100%",
    padding: '15px 10px',
    marginBottom: '20px',
})

export const HomeTransactionCategoryBlock = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '10px',
})

export const HomeTransactionCategory = styled(Typography)<TypographyProps & { theme?: Theme, component?: string }>(({ theme }) => ({
    color: theme.colors.white
}))

export const HomeTransactionListTitle = styled(Typography)<TypographyProps & { theme?: Theme, component?: string }>(({ theme }) => ({
    color: theme.colors.white,
    marginBottom: '10px'
}))

export const HomeTransactionListDate = styled(Typography)<TypographyProps & { theme?: Theme, component?: string }>(({ theme }) => ({
  color: theme.colors.white,
}))
