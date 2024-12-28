const AddCart = () => {
  return (
    <div className="add-to-cart">
      <div className="cart">
        <h1>CART (3)</h1>
        <p> Remove all</p>
      </div>

      <div className="cart1">
        <div className="inner-cart">
          <img src="appImgs/Group 22.png" alt="pads" />
          <div>
            <h1 className="name">XX99 MK II</h1>
            <p className="price">$2,999</p>
          </div>
        </div>
        <button className="btn">- 1 +</button>
      </div>
      <div className="cart1">
        <div className="inner-cart">
          <img src="appImgs/Group 22 (2).png" alt="pads" />
          <div>
            <h1 className="name">XX59</h1>
            <p className="price">$899</p>
          </div>
        </div>
        <button className="btn">- 2 +</button>
      </div>
      <div className="cart1">
        <div className="inner-cart">
          <img src="appImgs/Group 22 (1).png" alt="pads" />
          <div>
            <h1 className="name">YX1</h1>
            <p className="price">$599</p>
          </div>
        </div>
        <button className="btn">- 1 +</button>
      </div>

      <div className="cart2">
        <h1>TOTAL</h1>
        <p>$5,395</p>
      </div>
      <button className="see-products">CHECKOUT</button>
    </div>
  );
};
export default AddCart;