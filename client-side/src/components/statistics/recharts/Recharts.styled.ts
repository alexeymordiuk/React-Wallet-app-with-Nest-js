import { Theme, styled } from "@mui/material";


export const RechartsWrapper = styled('section')<{ theme?: Theme }>(({ theme }) => ({

    ".recharts-legend-wrapper" : {
    overflowY: 'auto!important' as any,
    position: 'static!important' as any,
    margin: '0 auto',

    '&::-webkit-scrollbar': {
        width: '2px',
        height: '6px'
      },
      '&::-webkit-scrollbar-track': {
        background: 'none'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#1d1d1d',
        width: '1px',
        borderRadius: '12px'
      },

      [theme.breakpoints.down('sm')]: {
      width: '300px!important',
    },
  },

    [theme.breakpoints.down('sm')]: {
     height: 'calc(100vh - 200px)',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'column'
    }
}))