import AppNav from "./navigations/appNavigation";
const ResHome = () => {
  const styles = {
    backgroundImage: `url('imgs/home/Bitmap.png')`,
  };
  return (
    <section className="res-home">
      <AppNav />
      <div className="res-home-main" style={styles}>
        <div>
          <h4>NEW PRODUCTS</h4>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>SEE PRODUCTS</button>
        </div>
      </div>
    </section>
  );
};
export default ResHome;
