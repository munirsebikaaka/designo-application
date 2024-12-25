import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./mainPages/home";
import Headphones from "./mainPages/headphones/headphones";
import Speakers from "./mainPages/speakers/speakers";
import Earphones from "./mainPages/earphones/earphones";
import HeadphonesDetailsOnes from "./mainPages/headphones/headphonesDetails1";
import HeadphonesDetailsTwo from "./mainPages/headphones/headphonesDetails2";
import HeadphonesDetailsThree from "./mainPages/headphones/headphonesDetails3";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="detailsOne" element={<HeadphonesDetailsOnes />} />
          <Route path="detailsTwo" element={<HeadphonesDetailsTwo />} />
          <Route path="detailsThree" element={<HeadphonesDetailsThree />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
