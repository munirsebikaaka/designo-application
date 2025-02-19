import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";
import DetailsNav from "../../navigations/detailsNav";
import { NavLink } from "react-router-dom";
import Login from "../buyingComps/Login";

const HeadphonesDetailsTwo = ({
  setShowCart,
  showCart,
  showLogin,
  setShowLogin,
  setShowThanks,
  showThanks,
}) => {
  return (
    <>
      {!showLogin ? (
        <div className="pro-details">
          <DetailsNav
            setShowLogin={setShowLogin}
            setShowThanks={setShowThanks}
            setShowCart={setShowCart}
          />
          <div className="goback">
            <NavLink className={"link"} to={"/headphones"}>
              Go Back
            </NavLink>
          </div>
          <section className="container">
            <div className="sections1">
              <div className="img-container">
                <img
                  className="img"
                  src="imgs/headphones/head1.png"
                  alt="head bart"
                />
              </div>
              <div className="detail-container">
                <h1>XX99 MARK I HEADPHONES</h1>
                <p className={!showCart ? "reduce-opp" : "add-opp"}>
                  As the gold standard for headphones, the classic XX99 Mark I
                  offers detailed and accurate audio reproduction for
                  audiophiles, mixing engineers, and music aficionados alike in
                  studios and on the go.
                </p>
                <h3 className="price"> $$ 1,750</h3>
                <div className="inc-cell">
                  <button className="increase">
                    <span className={!showCart ? "smy" : "add-opp"}>-</span>
                    <span className="num">1</span>{" "}
                    <span className={!showCart ? "smy" : "add-opp"}>+</span>
                  </button>
                  <button
                    onClick={() => setShowCart(true)}
                    className="increase2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="container">
            <div className="sections2">
              <div>
                <h1>FEATURES</h1>
                <p className="feat-det">
                  As the headphones all others are measured against, the XX99
                  Mark I demonstrates over five decades of audio expertise,
                  redefining the critical listening experience. This pair of
                  closed-back headphones are made of industrial, aerospace-grade
                  materials to emphasize durability at a relatively light weight
                  of 11 oz.
                </p>
                <p>
                  From the handcrafted microfiber ear cushions to the robust
                  metal headband with inner damping element, the components work
                  together to deliver comfort and uncompromising sound. Its
                  closed-back design delivers up to 27 dB of passive noise
                  cancellation, reducing resonance by reflecting sound to a
                  dedicated absorber. For connectivity, a specially tuned cable
                  is included with a balanced gold connector.
                </p>
              </div>
              <div className="bonus">
                <h1>IN THE BOX</h1>
                <ul>
                  <li>
                    <span>1x</span>
                    <p>Headphones Unit</p>
                  </li>
                  <li>
                    <span>2x</span>
                    <p>Replacement Earcups</p>
                  </li>
                  <li>
                    <span>1x</span>
                    <p>User Manual</p>
                  </li>
                  <li>
                    <span>1x</span>
                    <p>33.5mm 5mAudioCable</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="container">
            <div className="section-img">
              <div className="small-ones">
                <img src=" imgs/headphones/Bitmap8 (3).png " alt="earpads" />
                <img src=" imgs/headphones/Bitmap8 (1).png" alt="earpads" />
              </div>
              <img src=" imgs/headphones/Bitmap8 (2).png " alt="earpads" />
            </div>
          </section>

          <section className="container">
            <div className="sections5">
              <h1 className="head">YOU MAY ALSO LIKE</h1>
              <div className="main">
                <div className="sec-details">
                  <div className="img-container">
                    <img src="imgs/gens/gen5.png" alt="ear pads" />
                  </div>
                  <h1>XX99 MARK II</h1>
                  <button className="see-products">SEE PRODUCTS</button>
                </div>
                <div className="sec-details">
                  <div className="img-container">
                    <img src="imgs/gens/gen2.png" alt="ear pads" />
                  </div>

                  <h1>XX59</h1>
                  <button className="see-products">SEE PRODUCTS</button>
                </div>
                <div className="sec-details">
                  <div className="img-container">
                    <img src="imgs/gens/gen3.png" alt="ear pads" />
                  </div>

                  <h1>ZX9 SPEAKER</h1>
                  <button className="see-products">SEE PRODUCTS</button>
                </div>
              </div>
            </div>
          </section>
          <Samples />
          <LocationDetails />
          <Footer />
        </div>
      ) : (
        <Login
          setShowLogin={setShowLogin}
          setShowThanks={setShowThanks}
          showThanks={showThanks}
        />
      )}
    </>
  );
};
export default HeadphonesDetailsTwo;
