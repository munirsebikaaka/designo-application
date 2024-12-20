import { IoCartOutline } from "react-icons/io5";

const AppNav = () => {
  return (
    <div className="app-nav-cell">
      <nav className="app-nav">
        <div className="menu">
          <img src="imgs/home/audiophile.png" alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#" className="nav-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              HEADPHONES
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              SPEAKERS
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              EARPHONES
            </a>
          </li>
        </ul>
        <IoCartOutline className="app-nav-icon" />
      </nav>
    </div>
  );
};
export default AppNav;
