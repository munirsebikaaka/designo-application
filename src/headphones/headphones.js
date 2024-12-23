import AppNav from "../appNavigation";
import Footer from "../Footer";
import LocationDetails from "../locationDet";
import Samples from "../samples";

const Headphones = () => {
  return (
    <div className="headphones">
      <div className="head">
        <AppNav />
        <h1>HEADPHONES</h1>
      </div>

      <button>Go Back</button>
      <section>
        <div className="img-container">
          <img
            className="img"
            src="imgs/headphones/head2.png"
            alt="headphone barts"
          />
        </div>
        <div className="about">
          <h4>NEW PRODUCTS</h4>
          <h1>
            XX99 MARK II
            <br />
            <span> HEADPHONES</span>
          </h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <button href="#" className="head-products">
            SEE PRODUCTS
          </button>
        </div>
      </section>

      <section className="sec-section">
        <div className="about">
          <h1>
            XX99 MARK I<br /> <span> HEADPHONES</span>
          </h1>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <button href="#" className="head-products">
            SEE PRODUCTS
          </button>
        </div>
        <div className="img-container">
          <img
            className="img"
            src="imgs/headphones/head1.png"
            alt="headphone barts"
          />
        </div>
      </section>

      <section>
        <div className="img-container">
          <img
            className="img"
            src="imgs/headphones/head3.png"
            alt="headphone barts"
          />
        </div>
        <div className="about">
          <h1>
            XX59
            <br /> <span>HEADPHONES</span>
          </h1>
          <p>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <button href="#" className="head-products">
            SEE PRODUCTS
          </button>
        </div>
      </section>

      <Samples />
      <LocationDetails />
      <Footer />
    </div>
  );
};
export default Headphones;
