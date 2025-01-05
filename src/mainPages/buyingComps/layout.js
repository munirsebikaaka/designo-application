const Layout = ({
  setShowCart,
  // setShowLogin
}) => {
  const setDefault = () => {
    setShowCart(false);
    // setShowLogin(false);
  };
  return <div onClick={setDefault} className="overlay"></div>;
};
export default Layout;
