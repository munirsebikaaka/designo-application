import AppNav from "../appNavigation";
import Footer from "../Footer";
import LocationDetails from "../locationDet";
import Samples from "../samples";

const Earphones = () => {
  return (
    <div className="earphones">
      <div className="head">
        <AppNav />
        <h1>EARPHONES</h1>
      </div>

      <section>
        <div className="img-container">
          <img
            className="earphones-img"
            src="imgs/earphones/ear.png"
            alt="product"
          />
        </div>
        <div className="about">
          <h4>NEW PRODUCTS</h4>
          <h1>
            YX1 WIRELESS
            <br /> EARPHONES
          </h1>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button className="earphones-products">SEE PRODUCTS</button>
        </div>
      </section>

      <Samples />
      <LocationDetails />
      <Footer />
    </div>
  );
};
export default Earphones;
