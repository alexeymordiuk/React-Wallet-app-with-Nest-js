import styled from "styled-components";


export const WindowButtonTitle = styled.h4({
    fontSize: '18px',
    fontWeight: '500',
    color: "#ffffff",

    '&:last-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
    }
})

export const OpenWindowButtonStyled = styled.button({
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
