import "./App.css";
import Header from "./components/Header";
import UttrakhandTourPage from "./pages/ UttarakhandTour";
import HeroSection from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CharDhamYatra } from "./pages/CharDhamYatra";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/uttarakhand-tour" element={<UttrakhandTourPage />} />
          <Route path="/char-dham-yatra" element={<CharDhamYatra />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
