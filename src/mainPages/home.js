import AppNav from "../navigations/appNavigation";
import Footer from "../generals/Footer";
import LocationDetails from "../generals/locationDet";
import ResHome from "../resHome";
import Samples from "../generals/samples";
import Login from "./buyingComps/Login";

function Home() {
  const styles = {
    backgroundImage: `url('imgs/home/Bitmap3.jpg')`,
  };
  return (
    <div>
      <Login />
      <section className="section1">
        <AppNav />
        <div className="main">
          <div>
            <h4>NEW PRODUCTS</h4>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button>SEE PRODUCTS</button>
          </div>
          <img
            className="hero-img"
            src="imgs/home/Bitmap.png"
            alt="example of bart sound"
          />
        </div>
      </section>
      <ResHome />
      <Samples />
      <section className="container">
        <div className="section2">
          <img src="imgs/home/speaker.png" alt="speaker" />
          <div>
            <h1>
              ZX9 <br />
              <span> SPEAKER</span>
            </h1>

            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button>SEE PRODUCTS</button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section3" style={styles}>
          <div>
            <h1>ZX7 SPEAKER</h1>
            <button className="see-pros">SEE PRODUCTS</button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section4">
          <div>
            <img src="Imgs/home/Bitmap (1).jpg" alt="ear peaces" />
          </div>
          <div className="sec4-det">
            <div className="details">
              <h1>YX1 EARPHONES</h1>
              <button className="see-pros">SEE PRODUCTS</button>
            </div>
          </div>
        </div>
      </section>
      <LocationDetails />
      <Footer />
    </div>
  );
}

export default Home;
