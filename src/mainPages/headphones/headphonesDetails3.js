import { NavLink } from "react-router-dom";
import Footer from "../../generals/Footer";
import LocationDetails from "../../generals/locationDet";
import Samples from "../../generals/samples";
import DetailsNav from "../../navigations/detailsNav";

const HeadphonesDetailsThree = () => {
  return (
    <div className="pro-details">
      <DetailsNav />
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
              src="imgs/headphones/head3.png"
              alt="head bart"
            />
          </div>
          <div className="detail-container">
            <h1>
              XX59
              <br />
              <span> HEADPHONES</span>
            </h1>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <h3 className="price">$$ 899</h3>
            <div className="inc-cell">
              <button className="increase">
                <span className="smy">-</span>
                <span className="num">1</span> <span className="smy">+</span>
              </button>
              <button className="increase2">ADD TO CART</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="sections2">
          <div>
            <h1>FEATURES</h1>
            <p className="feat-det">
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p>
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
            </p>
          </div>
          <div className="bonus">
            <h1>IN THE BOX</h1>
            <ul>
              <li>
                <span>1x</span> <p>Headphones Unit</p>
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
            <img src=" imgs/headphones/Bitmap (5).png " alt="earpads" />
            <img src=" imgs/headphones/Bitmap (4).png" alt="earpads" />
          </div>
          <img src=" imgs/headphones/Bitmap (3).png " alt="earpads" />
        </div>
      </section>

      <section className="sections5">
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
                <img src="imgs/gens/gen4.png" alt="ear pads" />
              </div>

              <h1>XX99 MARK 1</h1>
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
  );
};
export default HeadphonesDetailsThree;
