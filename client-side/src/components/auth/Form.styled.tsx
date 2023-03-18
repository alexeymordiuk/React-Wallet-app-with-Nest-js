import styled from "styled-components";

export const FormWrraper = styled.div({
    background: '#BCBF1D',
    borderRadius: '20px',
    padding: '15px',
    height: 'calc(100vh - 150px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
})

export const FormTitle = styled.div({
    textAlign: 'center',
    marginBottom: '20px'
})

export const FormDirection = styled.form({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1000px',
    background: '#000C22',
    padding: '20px',
    borderRadius: '20px',
    rowGap: '20px'
})

export const Label = styled.label({
    fontSize: '18px',
    color: '#ffffff'
})

export const Input = styled.input({
    background: '#ffffff',
    minHeight: '50px',
    borderRadius: '20px',
    padding: '0 10px',
    fontSize: '18px',
    outline: 'none'
})

export const SubmitButton = styled.input.attrs(({
    type: 'submit'
  }))`
    background-color: #1ABF52;
    min-height: 50px;
    color: white;
    border-radius: 20px;
    font-size: 22px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: #BCBF1D;
    }
`;

export const HaveAccountTitle = styled.h3({
    fontSize: '18px',
    color: '#ffffff',
    fontWeight: '500'
})

export const LogOutButton = styled.button({
    display: 'inline-block',
    padding: '10px 15px',
    background: '#1A17AB',
    color: '#ffffff',
    fontSize: '22px',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
    ":hover": {
        background: 'red'
    },
})

export const SwicthButton = styled(LogOutButton)({
    background: '#BCBF1D',

    ":hover": {
        background: '#1ABF52'
    },
})


