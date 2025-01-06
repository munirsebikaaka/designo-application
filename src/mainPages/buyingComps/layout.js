const Layout = ({ setShowCart, setShowThanks, showCart, showThanks }) => {
  const setDefault = () => {
    setShowCart(false);
    setShowThanks(false);
  };
  return (
    <div
      onClick={setDefault}
      className={showCart ? "overlay" : "overlay-thanks"}
    ></div>
  );
};
export default Layout;
