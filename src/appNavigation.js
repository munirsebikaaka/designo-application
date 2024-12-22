import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div className="app-nav-cell">
      <nav className="app-nav">
        <div className="menu">
          <img src="imgs/home/audiophile.png" alt="Logo" />
        </div>
        <ul>
          <li>
            <NavLink to={"/"} className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/headphones"} className="nav-link">
              HEADPHONES
            </NavLink>
          </li>
          <li>
            <NavLink to={"/speakers"} className="nav-link">
              SPEAKERS
            </NavLink>
          </li>
          <li>
            <NavLink to={"/earphones"} className="nav-link">
              EARPHONES
            </NavLink>
          </li>
        </ul>
        <IoCartOutline className="app-nav-icon" />
      </nav>
    </div>
  );
};
export default AppNav;
