import AppNav from "../../navigations/appNavigation";
import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";
import { NavLink } from "react-router-dom";

const Earphones = () => {
  return (
    <div className="earphones">
      <div className="head">
        <AppNav />
        <h1>EARPHONES</h1>
      </div>

      <section className="container">
        <div className="unreverse">
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
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <NavLink to={"/earphonesDetails"} className="head-products">
              SEE PRODUCTS
            </NavLink>
          </div>
        </div>
      </section>

      <Samples />
      <LocationDetails />
      <Footer />
    </div>
  );
};
export default Earphones;
