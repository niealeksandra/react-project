import { NavLink } from "react-router-dom";
import Button from "../shared/CustomButton/Button";

const Navbar = () => {
  return (
    <nav>
      <Button text="Darkmode on" size="normal" />
      <ul>
          <li>
              <NavLink style={ ({isActive}) => isActive ? {color: 'red'} : {color: 'blue'} } to='/home'>Home</NavLink>
          </li>
          <li>
              <NavLink style={ ({isActive}) => isActive ? {color: 'red'} : {color: 'blue'} } to='/users'>Users</NavLink>
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;
