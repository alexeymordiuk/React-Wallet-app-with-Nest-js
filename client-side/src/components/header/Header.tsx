import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="registration">Registration</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;