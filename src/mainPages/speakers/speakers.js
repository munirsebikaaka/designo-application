import AppNav from "../../navigations/appNavigation";
import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";

const Speakers = () => {
  return (
    <div className="speakers">
      <div className="head">
        <AppNav />
        <h1>SPEAKERS</h1>
      </div>
      <section>
        <div className="img-container">
          <img
            className="speaker-img"
            src="imgs/speakers/speaker1.png"
            alt="sound speaker"
          />
        </div>
        <div className="about">
          <h4>NEW PRODUCTS</h4>
          <h1>
            ZX9
            <br />
            <span> SPEAKER</span>
          </h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <button className="speaker-products">SEE PRODUCTS</button>
        </div>
      </section>

      <section className="sec-section">
        <div className="about">
          <h1>
            ZX7
            <br /> <span> SPEAKER</span>
          </h1>
          <p>
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <button className="speaker-products">SEE PRODUCTS</button>
        </div>
        <div className="img-container">
          <img
            className="speaker-img"
            src="imgs/speakers/speaker2.png"
            alt="product"
          />
        </div>
      </section>

      <Samples />
      <LocationDetails />
      <Footer />
    </div>
  );
};
export default Speakers;
