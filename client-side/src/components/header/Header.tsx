import { FC } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrraper, Links, Nav } from "./Header.styled";
import { links } from "./headerLinks";

const Header: FC = () => {

  return (
    <HeaderWrraper>
      <Nav>
        <Links>
          {links.map(({ id, path, icon }) => (
            <li key={id}>
              <NavLink
                to={path}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#f2f2f2" : "#343734",
                    fontSize: '22px'
                  };
                }}
              >
                {icon}
              </NavLink>
            </li>
          ))}
        </Links>
      </Nav>
    </HeaderWrraper>
  );
};

export default Header;
