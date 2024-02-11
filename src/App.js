import "./App.css";
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import AboutUsPage from "./Pages/AboutUsPage";
import GetInTouchPage from "./Pages/GetInTouchPage";
import { HomePage } from "./Pages/HomePage";
import PhotosPage from "./Pages/PhotosPage";
import PurchaseInfoPage from "./Pages/PurchaseInfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/purchase-info" element={<PurchaseInfoPage />} />
          <Route path="/contact" element={<GetInTouchPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
