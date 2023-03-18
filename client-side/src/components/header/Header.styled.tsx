import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrraper = styled.header({
    backgroundColor: '#E4E81A',
    margin: '20px 0 20px 0',
    borderRadius: '20px',
    padding: '10px 20px'
})

export const Links = styled.ul({
    display: 'flex',
    alignItems: 'center',
    gap: '0 20px'
})

export const Nav = styled.nav({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0 20px'
})

export const TitleLink = styled(Link)({
    fontSize: '22px',
    fontWeight: '700',
    color: '#1A17AB',
    transition: '0.3s ease-in-out',
    ":hover": {
        color: '#ffffff'
    },
})
