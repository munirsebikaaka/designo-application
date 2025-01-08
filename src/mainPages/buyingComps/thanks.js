import { IoCheckmarkOutline } from "react-icons/io5";

const Thanks = () => {
  return (
    <div className="thanks">
      <IoCheckmarkOutline className="mark" />
      <h1 className="head">
        THANK YOU <br /> FOR YOUR ORDER
      </h1>
      <p className="intro">You will recieve an email confamation shortly</p>
      <div className="thax-details">
        <div className="thax-main">
          <div className="inner-thx">
            <div className="thx-det">
              <img src="imgs/Group 22.png" alt="pads" />
              <div>
                <h1 className="name">XX99 MK II</h1>
                <p className="price">$2,999</p>
              </div>
            </div>
            <p className="x-one">x1</p>
          </div>
          <p className="left">and 2 other item(s)</p>
        </div>
        <div className="thanks-total">
          <h1>GRAND TOTAL</h1>
          <p>$5,446</p>
        </div>
      </div>
      <button className="see-products">BACK TO HOME</button>
    </div>
  );
};
export default Thanks;
