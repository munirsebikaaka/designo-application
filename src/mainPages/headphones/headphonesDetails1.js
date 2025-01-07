import { NavLink } from "react-router-dom";
import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";
import DetailsNav from "../../navigations/detailsNav";
import Login from "../buyingComps/Login";

const HeadphonesDetailsOnes = ({
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
                  src="imgs/headphones/head2.png"
                  alt="head bart"
                />
              </div>
              <div className="detail-container">
                <h1>XX99 MARK II HEADPHONES</h1>
                <p className={!showCart ? "reduce-opp" : "add-opp"}>
                  The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound.
                </p>
                <h3 className="price">$ 2,999</h3>
                <div className="inc-cell">
                  <button className="increase">
                    <span className={!showCart ? "smy" : "add-opp"}>-</span>
                    <span className="num">1</span>
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
                  Featuring a genuine leather head strap and premium earcups,
                  these headphones deliver superior comfort for those who like
                  to enjoy endless listening. It includes intuitive controls
                  designed for any situation. Whether you’re taking a business
                  call or just in your own personal space, the auto on/off and
                  pause features ensure that you’ll never miss a beat.
                </p>
                <p>
                  The advanced Active Noise Cancellation with built-in equalizer
                  allow you to experience your audio world on your terms. It
                  lets you enjoy your audio in peace, but quickly interact with
                  your surroundings when you need to. Combined with Bluetooth 5.
                  0 compliant connectivity and 17 hour battery life, the XX99
                  Mark II headphones gives you superior sound, cutting-edge
                  technology, and a modern design aesthetic.
                </p>
              </div>
              <div className="bonus-cell">
                <div className="bonus">
                  <h1>IN THE BOX</h1>
                  <ul>
                    <li>
                      <span>1x</span> <p>Headphones Unit</p>
                    </li>
                    <li>
                      <span>2x</span> <p>Replacement Earcups</p>
                    </li>
                    <li>
                      <span>1x</span>
                      <p>User Manual</p>
                    </li>
                    <li>
                      <span>1x</span> <p>33.5mm 5mAudioCable</p>
                    </li>
                    <li>
                      <span>1x</span>
                      <p>Travel Bag</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="container">
            <div className="section-img">
              <div className="small-ones">
                <img src=" imgs/headphones/Bitmap (2).jpg " alt="client-face" />
                <img
                  src=" imgs/headphones/Bitmap (1).jpg "
                  alt="phone conected with blutooth"
                />
              </div>
              <img src=" imgs/headphones/Bitmap.jpg " alt="earpads" />
            </div>
          </section>

          <section className="container">
            <div className="sections5">
              <h1 className="head">YOU MAY ALSO LIKE</h1>
              <div className="main">
                <div className="sec-details">
                  <div className="img-container">
                    <img src="imgs/gens/gen4.png" alt="ear pads" />
                  </div>
                  <h1>XX99 MARK 1</h1>
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
export default HeadphonesDetailsOnes;
