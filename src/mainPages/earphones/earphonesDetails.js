import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";

const EarphonesDetails = () => {
  return (
    <div className="pro-details">
      {/* <DetailsNav /> */}
      <button>Go Back</button>
      <section className="sections1">
        <div className="img-container">
          <img className="img" src="imgs/earphones/ear.png" alt="ear piece" />
        </div>
        <div className="detail-container">
          <h4>NEW PRODUCTS</h4>
          <h1>
            YX1 WIRELESS <span>EARPHONES</span>
          </h1>
          <p>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <h3 className="price">$599</h3>
          <span>
            <button className="increase">- 1 +</button>
            <button className="increase2">ADD TO CART</button>
          </span>
        </div>
      </section>
      <section className="sections2">
        <div>
          <h1>FEATURES</h1>
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <p>
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div className="bonus">
          <h1>IN THE BOX</h1>
          <ul>
            <li>
              <span>1x</span>Earphone Unit
            </li>
            <li>
              <span>2x</span>Multi-Size Ear Plug
            </li>
            <li>
              <span>1x</span>User Manual
            </li>
            <li>
              <span>1x</span>USB-C Charging Plug
            </li>
            <li>
              <span>1x</span>Travel Pouch
            </li>
          </ul>
        </div>
      </section>
      <section className="sections4">
        <div className="small-imgs">
          <img src="imgs/earphones/Bitmap (5).png" alt="earphones" />
          <img src="imgs/earphones/Bitmap (4).png" alt="earphones" />
        </div>
        <img
          className="main-img"
          src="imgs/earphones/Bitmap (6).png"
          alt="earphones"
        />
      </section>
      <section className="sections5">
        <h1 className="head">YOU MAY ALSO LIKE</h1>
        <div className="main">
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen4.png" alt="ear pads" />
            </div>

            <h1>XX99 MARK 1</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen2.png" alt="ear pads" />
            </div>

            <h1>XX59 </h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <div className="img-container">
              <img src="appImgs/gens/gen3.png" alt="ear pads" />
            </div>
            <h1>ZX9 SPEAKER</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
        </div>
      </section>
      <Samples />
      <LocationDetails />
      <Footer />
    </div>
  );
};
export default EarphonesDetails;
