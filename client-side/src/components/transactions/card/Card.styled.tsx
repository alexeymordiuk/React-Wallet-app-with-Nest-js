import styled from "styled-components";

export const CardStyled = styled.div({
    height: '200px',
    maxWidth: '1000px',
    width: '100%',
    background: '-webkit-linear-gradient(bottom, rgb(52, 86, 77) 0%, rgb(52, 113, 88) 100%);',
    borderRadius: '35px',
    padding: '15px 18px',
    display: 'flex',
    flexDirection: 'column'
})


export const CardTitleBlock = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    img: {
        maxWidth: '50px',
    }
})

export const CardVisaTitle = styled.h2({
    fontSize: '25px',
    color: '#eef6e8',
    fontWeight: '500'
  })

export const CardBottom= styled.div({
    marginTop: 'auto'
})

export const CardBalanceSubTitle = styled.p({
    fontSize: '15px',
    color: 'rgba(129,153,120,255)',
    marginBottom: '15px'
  })

export const CardBalanceNumber = styled.span({
  fontSize: '25px',
  color: '#eef6e8',
})