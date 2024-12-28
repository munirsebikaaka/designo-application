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
          <Route path="speakersDetailsOne" element={<SpeakerDetails1 />} />
          <Route path="speakersDetailsTwo" element={<SpeakerDetails2 />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="earphonesDetails" element={<EarphonesDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
