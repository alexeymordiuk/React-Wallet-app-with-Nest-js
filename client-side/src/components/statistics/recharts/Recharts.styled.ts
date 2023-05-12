import styled from 'styled-components';

export const RechartsWrapper = styled.section({

    ".recharts-legend-wrapper" : {
    overflow: 'auto!important',
    position: 'static!important' as any,
    
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

    [`@media (max-width: 750px)`]: {
      maxWidth: '300px!important',
      width: '100%!important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto'
    },
    }
})