import { NavLink } from "react-router-dom";
import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";
import DetailsNav from "../../navigations/detailsNav";
import Login from "../buyingComps/Login";

const SpeakerDetails2 = ({
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
            <NavLink className={"link"} to={"/speakers"}>
              Go Back
            </NavLink>
          </div>
          <section className="container">
            <div className="sections1">
              <div className="img-container">
                <img
                  className="img"
                  src="imgs/speakers/speaker2.png"
                  alt="head bart"
                />
              </div>
              <div className="detail-container">
                <h1>
                  ZX7
                  <br /> SPEAKER
                </h1>
                <p className={!showCart ? "reduce-opp" : "add-opp"}>
                  Stream high quality sound wirelessly with minimal to no loss.
                  The ZX7 speaker uses high-end audiophile components that
                  represents the top of the line powered speakers for home or
                  studio use.
                </p>
                <h3 className="price">$3,500</h3>
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
                  Reap the advantages of a flat diaphragm tweeter cone. This
                  provides a fast response rate and excellent high frequencies
                  that lower tiered bookshelf speakers cannot provide. The
                  woofers are made from aluminum that produces a unique and
                  clear sound. XLR inputs allow you to connect to a mixer for
                  more advanced usage.
                </p>
                <p>
                  The ZX7 speaker is the perfect blend of stylish design and
                  high performance. It houses an encased MDF wooden enclosure
                  which minimises acoustic resonance. Dual connectivity allows
                  pairing through bluetooth or traditional optical and RCA
                  input. Switch input sources and control volume at your finger
                  tips with the included wireless remote. This versatile speaker
                  is equipped to deliver an authentic listening experience.
                </p>
              </div>
              <div className="bonus">
                <h1>IN THE BOX</h1>

                <ul>
                  <li>
                    <span>1x</span>
                    <p>Speaker Unit</p>
                  </li>
                  <li>
                    <span>2x</span>
                    <p>Speaker Cloth Panel</p>
                  </li>
                  <li>
                    <span>1x</span>
                    <p>User Manual</p>
                  </li>
                  <li>
                    <span>1x</span>
                    <p>3.5mm 7.5m Audio Cable</p>
                  </li>
                  <li>
                    <span>1x</span>
                    <p>7.5m Optical Cable</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="container">
            <div className="section-img">
              <div className="small-ones">
                <img src=" imgs/speakers/Bitmap (6).png " alt="earpads" />
                <img src=" imgs/speakers/Bitmap (1).png" alt="earpads" />
              </div>
              <img src=" imgs/speakers/Bitmap (3).png " alt="earpads" />
            </div>
          </section>
          <section className="container">
            <div className="sections5">
              <h1 className="head">YOU MAY ALSO LIKE</h1>
              <div className="main">
                <div className="sec-details">
                  <div className="img-container">
                    <img src="imgs/gens/gen3.png" alt="ear pads" />
                  </div>

                  <h1>ZX9 SPEAKER</h1>
                  <button className="see-products">SEE PRODUCTS</button>
                </div>
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
export default SpeakerDetails2;
