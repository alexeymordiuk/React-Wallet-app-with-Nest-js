import styled from "styled-components";

export const TransactionItemsWrraper = styled.div({
    width: '100%',
    borderRadius: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 150px)',
    gap: '30px 40px',

    [`@media (max-width: 750px)`]: {
      gridTemplateColumns: '1fr',
    },
})


export const TransactionTableHeader = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0 15px',
    background: '#1d1d1d',
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '20px'
})


export const TransactionTitle = styled.h2({
    fontSize: '20px',
    fontWeight: '500',
    color: "#ffffff"
})


export const TransactionAmount = styled.span({
    fontSize: '18px',
    fontWeight: '500',
    color: "#ffffff",

    '&:last-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
    }
})

export const TransactionTotal = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',

    [`@media (max-width: 750px)`]: {
      flexDirection: 'column',
    },
})

