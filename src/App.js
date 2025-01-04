import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./mainPages/home";
import Headphones from "./mainPages/headphones/headphones";
import Speakers from "./mainPages/speakers/speakers";
import Earphones from "./mainPages/earphones/earphones";
import HeadphonesDetailsOnes from "./mainPages/headphones/headphonesDetails1";
import HeadphonesDetailsTwo from "./mainPages/headphones/headphonesDetails2";
import HeadphonesDetailsThree from "./mainPages/headphones/headphonesDetails3";
import SpeakerDetails1 from "./mainPages/speakers/speakerDetails1";
import SpeakerDetails2 from "./mainPages/speakers/speakerDetails2";
import EarphonesDetails from "./mainPages/earphones/earphonesDetails";
import AddCart from "./mainPages/buyingComps/addToCart";
import Thanks from "./mainPages/buyingComps/thanks";
import Layout from "./mainPages/buyingComps/layout";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  return (
    <div>
      {showCart || showThanks ? <Layout setShowCart={setShowCart} /> : ""}
      {showCart ? <AddCart /> : ""}
      {showThanks ? <Thanks /> : ""}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route
            path="detailsOne"
            element={<HeadphonesDetailsOnes setShowCart={setShowCart} />}
          />
          <Route
            path="detailsTwo"
            element={<HeadphonesDetailsTwo setShowCart={setShowCart} />}
          />
          <Route
            path="detailsThree"
            element={<HeadphonesDetailsThree setShowCart={setShowCart} />}
          />
          <Route path="speakers" element={<Speakers />} />
          <Route
            path="speakersDetailsOne"
            element={
              <SpeakerDetails1
                setShowCart={setShowCart}
                setShowThanks={setShowThanks}
              />
            }
          />
          <Route
            path="speakersDetailsTwo"
            element={
              <SpeakerDetails2
                setShowCart={setShowCart}
                setShowThanks={setShowThanks}
              />
            }
          />
          <Route path="earphones" element={<Earphones />} />
          <Route
            path="earphonesDetails"
            element={
              <EarphonesDetails
                setShowCart={setShowCart}
                setShowThanks={setShowThanks}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
