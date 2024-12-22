import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Headphones from "./headphones/headphones";
import Speakers from "./speakers/speakers";
import Earphones from "./earphones/earphones";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
