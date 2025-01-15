import "./App.css";
import Header from "./components/Header";
import UttrakhandTourPage from "./pages/ UttarakhandTour";
import HeroSection from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import $ from "jquery";
window.$ = $;
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/uttarakhand-tour" element={<UttrakhandTourPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
