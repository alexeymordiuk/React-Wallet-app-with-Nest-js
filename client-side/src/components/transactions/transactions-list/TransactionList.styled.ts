import styled from "styled-components";

export const TransactionTableList = styled.ul({
    marginBottom: '20px',
    height: 'calc(100vh - 350px)',
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
      height: 'calc(100vh - 700px)',
    },
  });

export const TransactionListItemStyled = styled.li({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0 15px',
    background: '#1d1d1d',
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '20px'
})

export const TransactionListItemText = styled.span({
    fontSize: '18px',
    fontWeight: '500',
    color: "#ffffff",

    '&:last-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
    }
})

export const TransactionCategory = styled.p({
    fontSize: '18px',
    fontWeight: '500',
    color: "#ffffff"
})

export const TransactioItemDeleteBtn = styled.button({
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