const FooterNav = () => {
  return (
    <nav className="footer-navigation">
      <img src="imgs/home/audiophile.png" alt="Logo" />
      <ul>
        <li>
          <a href="#" className="nav-link" to={"/"}>
            HOME
          </a>
        </li>
        <li>
          <a href="#" className="nav-link" to={"/headPs"}>
            HEADPHONES
          </a>
        </li>
        <li>
          <a href="#" className="nav-link" to={"/speakers"}>
            SPEAKERS
          </a>
        </li>
        <li>
          <a href="#" className="nav-link" to={"/ears"}>
            EARPHONES
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default FooterNav;
