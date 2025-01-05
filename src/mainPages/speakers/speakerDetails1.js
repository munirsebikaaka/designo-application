import { NavLink } from "react-router-dom";
import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";
import DetailsNav from "../../navigations/detailsNav";
import Login from "../buyingComps/Login";

const SpeakerDetails1 = ({ setShowCart, showLogin, setShowLogin }) => {
  return (
    <>
      {!showLogin ? (
        <div className="pro-details">
          <DetailsNav />
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
                  src="imgs/speakers/speaker1.png"
                  alt="head bart"
                />
              </div>
              <div className="detail-container">
                <h1>
                  ZX9 <br />
                  <span> SPEAKER</span>
                </h1>
                <p>
                  Upgrade your sound system with the all new ZX9 active speaker.
                  It’s a bookshelf speaker system that offers truly wireless
                  connectivity -- creating new possibilities for more pleasing
                  and practical audio setups.
                </p>
                <h3 className="price">$4,500</h3>
                <div className="inc-cell">
                  <button className="increase">
                    <span className="smy">-</span>{" "}
                    <span className="num">1</span>{" "}
                    <span className="smy">+</span>
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
                  Connect via Bluetooth or nearly any wired source. This speaker
                  features optical, digital coaxial, USB Type-B, stereo RCA, and
                  stereo XLR inputs, allowing you to have up to five wired
                  source devices connected for easy switching. Improved
                  bluetooth technology offers near lossless audio quality at up
                  to 328ft (100m).
                </p>
                <p>
                  Discover clear, more natural sounding highs than the
                  competition with ZX9’s signature planar diaphragm tweeter.
                  Equally important is its powerful room-shaking bass courtesy
                  of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy
                  equal sound quality whether in a large room or small den.
                  Furthermore, you will experience new sensations from old songs
                  since it can respond to even the subtle waveforms.
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
                    <span>2x</span> <p>Speaker Cloth Panel</p>
                  </li>
                  <li>
                    <span>1x</span>
                    <p>User Manual</p>
                  </li>
                  <li>
                    <span>1x</span>
                    <p>33.5mm 10mAudioCable</p>
                  </li>
                  <li>
                    <span>1x</span> <p>10m Optical Cable</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="container">
            <div className="section-img">
              <div className="small-ones">
                <img src=" imgs/speakers/Bitmap.png " alt="earpads" />
                <img src=" imgs/speakers/Bitmap (7).png" alt="earpads" />
              </div>
              <img src=" imgs/speakers/Bitmap (8).png " alt="earpads" />
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
                  <h1>ZX7 SPEAKER</h1>
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
        <Login setShowLogin={setShowLogin} />
      )}
    </>
  );
};
export default SpeakerDetails1;
