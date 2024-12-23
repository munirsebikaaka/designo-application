import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AppNav = () => {
  const [showHideLinks, setShowHideLinks] = useState(false);
  function add() {
    setShowHideLinks(true);
  }
  function remove() {
    setShowHideLinks(false);
  }
  return (
    <div className="app-nav-cell">
      <nav className="app-nav">
        <div className="menu">
          <IoMdMenu onClick={add} className="open" />
          <img src="imgs/home/audiophile.png" alt="Logo" />
        </div>
        <ul className={showHideLinks ? "show-links" : "hide-links"}>
          <li>
            <IoClose onClick={remove} className="close" />
          </li>
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
