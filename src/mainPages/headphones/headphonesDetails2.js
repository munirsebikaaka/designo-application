import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";

const HeadphonesDetailsTwo = () => {
  return (
    <div className="pro-details">
      {/* <DetailsNav /> */}
      <button>Go Back</button>

      <section className="sections1">
        <div className="img-container">
          <img
            className="img"
            src="imgs/headphones/head1.png"
            alt="head bart"
          />
        </div>
        <div className="detail-container">
          <h4>NEW PRODUCTS</h4>
          <h1>XX99 MARK I HEADPHONES</h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <h3 className="price"> $$ 1,750</h3>
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
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p>
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.
          </p>
        </div>
        <div className="bonus">
          <h1>IN THE BOX</h1>
          <ul>
            <li>
              <span>1x</span>Headphones Unit
            </li>
            <li>
              <span>2x</span>Replacement Earcups
            </li>
            <li>
              <span>1x</span>User Manual
            </li>
            <li>
              <span>1x</span>33.5mm 5mAudioCable
            </li>
          </ul>
        </div>
      </section>
      <section className="sections4">
        <div className="small-imgs">
          <img src="imgs/headphones/Bitmap8 (1).png" alt="headphone" />
          <img
            className="main-img"
            src="imgs/headphones/Bitmap8 (2).png"
            alt="headphone"
          />
        </div>
        <img
          className="main-img"
          src="imgs/headphones/Bitmap8 (2).png"
          alt="headphone"
        />
      </section>
      <section className="sections5">
        <h1 className="head">YOU MAY ALSO LIKE</h1>
        <div className="main">
          <div>
            <div className="img-container">
              <img src="imgs/gens/gen5.png" alt="ear pads" />
            </div>
            <h1>XX99 MARK II</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <div className="img-container">
              <img src="imgs/gens/gen2.png" alt="ear pads" />
            </div>

            <h1>XX59</h1>
            <button className="see-products">SEE PRODUCTS</button>
          </div>
          <div>
            <div className="img-container">
              <img src="imgs/gens/gen3.png" alt="ear pads" />
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
export default HeadphonesDetailsTwo;