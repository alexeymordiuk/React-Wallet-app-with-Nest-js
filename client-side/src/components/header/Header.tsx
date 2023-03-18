import { FC } from "react";
import { Link } from "react-router-dom";
import { HeaderWrraper, Links, Nav, TitleLink } from "./Header.styled";
import { links } from "./headerLinks";
import logo from '../../assets/logo.png'

const Header: FC = () => {
  return (
    <HeaderWrraper>
      <Nav>
       <Link to={'/'}><img src={logo} alt="logo" width={50} height={50}/></Link>
        <Links>
          {links.map(({id, title, path}) => (
             <li key={id}>
              <TitleLink to={path}>{title}</TitleLink>
             </li>
          ))}
        </Links>
      </Nav>
    </HeaderWrraper>
  );
};

export default Header;
