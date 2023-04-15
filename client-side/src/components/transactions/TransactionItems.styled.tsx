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
  height: 'calc(100vh - 220px)',
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
});

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
    gap: '0 20px'
})

export const TransactionDeleteBtn = styled.button({
    background: 'none',
    color: '#ffffff',
    display: 'flex',
    fontSize: '22px',
    cursor: 'pointer',
    transition: '0.3s ease-in-out',

    "&:hover": {
    color: '#1ABF52'
    }
})

export const AddTransactionBtn = styled.button({
    background: 'none',
    border: '1px solid #1ABF52',
    borderRadius: '50%',
    height: '40px',
    width: '40px',
    cursor: 'pointer',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#ffffff",
    transition: '0.3s ease-in-out',

    "&:hover": {
    background: '#1ABF52'
    }
})