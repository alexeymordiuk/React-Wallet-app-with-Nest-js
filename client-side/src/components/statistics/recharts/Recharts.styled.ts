import styled from 'styled-components';

export const RechartsWrapper = styled.section({

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

    [`@media (max-width: 750px)`]: {
      maxWidth: '300px!important',
    },
    }
})