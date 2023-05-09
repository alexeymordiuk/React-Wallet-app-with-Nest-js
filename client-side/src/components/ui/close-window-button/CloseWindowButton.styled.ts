import styled from "styled-components";

export const CloseWindowButtonStyled = styled.button({
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
    position: 'absolute',
    top: '20px',
    right: '20px',

    "&:hover": {
    background: '#1ABF52'
    }
})