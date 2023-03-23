import styled from "styled-components";

export const TransactionItemsWrraper = styled.div({
    width: '100%',
    maxWidth: '1100px',
    background: '#232323',
    padding: '20px',
    borderRadius: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    justifyContent: 'space-between',
    minHeight: 'calc(100vh - 150px)',
    gap: '0 40px'
})

export const TransactionTable = styled.div({
    marginBottom: '20px',
    height: 'calc(100vh - 250px)',
    overflowY: 'auto',
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

export const TransactionDates = styled.div({
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

export const TransactionCategory = styled.h4({
    fontSize: '18px',
    fontWeight: '500',
    color: "#ffffff"
})

export const TransactionAmount = styled.span({
    fontSize: '18px',
    fontWeight: '500',
    color: "#ffffff"
})

export const TransactionTotal = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0 20px'
})