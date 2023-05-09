import styled from "styled-components";

export const Window = styled.div({
    width: '90%',
    maxWidth: '700px',
    minHeight: '50vh',
    background: '#1d1d1d',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
})

export const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px 0',
    width: '100%', 
    maxWidth: '600px',
    position: 'relative'
})

export const Input = styled.input({
    background: '#ffffff',
    minHeight: '50px',
    borderRadius: '20px',
    padding: '0 10px',
    fontSize: '18px',
    outline: 'none'
})

export const SubmitButton = styled.button({
    background: '#1ABF52',
    minHeight: '50px',
    color: "white",
    borderRadius: '20px',
    fontSize: '22px',
    cursor: "pointer",
    transition: "0.3s ease-in-out",

   "hover": {
    backgroundColor: "#BCBF1D"
    }
})

export const WindowTitle = styled.h2({
    fontSize: '25px',
    color: '#ffffff',
    fontWeight: '500',
    marginBottom: '20px'
})

