import { FaChevronRight } from "react-icons/fa";

const Samples = () => {
  return (
    <div className="container">
      <div className="samples">
        <div>
          <img src="imgs/samples/sample1.png" alt="product example" />
          <button>HEADPHONES</button>
          <p>
            SHOP <FaChevronRight className="sample-icon" />
          </p>
        </div>
        <div>
          <img src="imgs/samples/sample2.png" alt="product example" />
          <button>SPEAKERS</button>
          <p>
            SHOP <FaChevronRight className="sample-icon" />
          </p>
        </div>

        <div>
          <img src="imgs/samples/sample3.png" alt="product example" />

          <button>EARPHONES</button>
          <p>
            SHOP <FaChevronRight className="sample-icon" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Samples;
