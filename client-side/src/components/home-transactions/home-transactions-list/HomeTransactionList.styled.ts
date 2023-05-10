import styled from "styled-components";

export const HomeTransactionListStyled = styled.ul({
    width: '100%',
    maxWidth: '1000px',
    padding: '20px',
    borderRadius: '20px',
    height: 'calc(100vh - 400px)',
    background: 'rgba(35,35,35,255)',
    margin: '25px 0',
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

  export const HomeTransactionListItemStyled = styled.li({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0 15px',
    background: '#1d1d1d',
    borderRadius: '15px',
    width: "100%",
    padding: '15px 7px',
    marginBottom: '20px',
})

export const HomeTransactionCategory = styled.p({
    fontSize: '18px',
    fontWeight: '500',
    color: "#ffffff"
})

export const HomeTransactionListTitle = styled.h3({
    fontSize: '23px',
    fontWeight: '500',
    color: "#ffffff",
    marginBottom: '15px'
})