import Footer from "../../generals/Footer";

const Login = () => {
  return (
    <div className="login">
      <div className="login-cell">
        <div className="main-login">
          <h1 className="check">CHECKOUT</h1>
          <div className="dets">
            <h1 className="main-head">BILLING DETAILS</h1>
            <div className="inner-dets">
              <div>
                <label>Name</label> <br />
                <input
                  className="login-input"
                  type="text"
                  placeholder="codesmann"
                />
              </div>
              <div>
                <label>Email</label>
                <br />
                <input
                  className="login-input"
                  type="text"
                  placeholder="munirs@gmail.com"
                />
              </div>
            </div>
            <label>Phonenumber</label>
            <br />
            <input
              className="login-phone"
              type="text"
              placeholder="0742083075"
            />
          </div>
          <div className="address">
            <h1 className="main-head">ADDRESS</h1>
            <label>Address</label>
            <br />
            <input
              className="input-adress"
              type="text"
              placeholder="1113 Williams Avenue"
            />
            <div className="inner-address">
              <div>
                <label>ZIP Code</label>
                <br />
                <input
                  className="login-input"
                  type="text"
                  placeholder="10001"
                />
              </div>
              <div>
                <label>City</label>
                <br />

                <input
                  className="login-input"
                  type="text"
                  placeholder="New york"
                />
              </div>
            </div>
            <label>Country</label>
            <br />
            <input
              className="login-country"
              type="text"
              placeholder="United States"
            />
          </div>
          <div className="payments-dts">
            <h1 className="main-head">PAYMENT DETAILS</h1>
            <div>
              <div className="checks">
                <input type="checkbox" className="check-input" />
                <p className="money">e-Money</p>
              </div>
              <div className="checks">
                <input type="checkbox" className="check-input" />
                <p className="money">Cash on Derivery</p>
              </div>
            </div>
          </div>
          <div className="payment">
            {/* <RiSecurePaymentFill className="icon" /> */}
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </div>
        <div className="summery">
          <div className="cart">
            <h1>SUMMERY</h1>
          </div>

          <div className="sum">
            <div className="inner-cart">
              <img src="appImgs/Group 22.png" alt="pads" />
              <div>
                <h1 className="name">XX99 MK II</h1>
                <p className="price">$2,999</p>
              </div>
            </div>
            <p className="btn">x1 </p>
          </div>
          <div className="sum">
            <div className="inner-cart">
              <img src="appImgs/Group 22 (2).png" alt="pads" />
              <div>
                <h1 className="name">XX59</h1>
                <p className="price">$899</p>
              </div>
            </div>
            <p className="btn"> x2</p>
          </div>
          <div className="sum">
            <div className="inner-cart">
              <img src="appImgs/Group 22 (1).png" alt="pads" />
              <div>
                <h1 className="name">YX1</h1>
                <p className="price">$599</p>
              </div>
            </div>
            <p className="btn">x1</p>
          </div>

          <div className="cart2">
            <h1>TOTAL</h1>
            <p>$5,395</p>
          </div>
          <div className="cart2">
            <h1>SHIPING</h1>
            <p>$50</p>
          </div>
          <div className="cart2">
            <h1>VAT(INCLUDDED)</h1>
            <p>$1,079</p>
          </div>
          <div className="cart2">
            <h1>GRAND TOTAL</h1>
            <p className="grand">$5,446</p>
          </div>
          <button className="see-products">CHECKOUT</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
