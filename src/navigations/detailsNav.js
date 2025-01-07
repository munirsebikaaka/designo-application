import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const DetailsNav = ({ setShowLogin, setShowThanks, setShowCart }) => {
  const [showHideLinks, setShowHideLinks] = useState(false);
  function add() {
    setShowHideLinks(true);
  }
  function remove() {
    setShowHideLinks(false);
  }
  const setDefaultFuns = () => {
    setShowThanks(false);
    setShowLogin(false);
    setShowCart(false);
  };
  return (
    <div className="details-navigation">
      <nav className="details-nav">
        <IoMdMenu onClick={add} className="mobile-menu" />

        <div className="menu">
          <IoMdMenu onClick={add} className="open" />
          <img src="imgs/home/audiophile.png" alt="Logo" />
        </div>
        <ul
          onClick={setDefaultFuns}
          className={showHideLinks ? "show-links" : "hide-links"}
        >
          <IoClose onClick={remove} className="close" />

          <li>
            <NavLink className="nav-link" to={"/"}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={"/headphones"}>
              HEADPHONES
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={"/speakers"}>
              SPEAKERS
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={"/earphones"}>
              EARPHONES
            </NavLink>
          </li>
        </ul>
        <IoCartOutline className="icon" />
      </nav>
    </div>
  );
};
export default DetailsNav;
