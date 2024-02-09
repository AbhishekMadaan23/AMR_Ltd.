import React from "react";
import Navbar from "../Components/Navbar";
import HomeBanner from "../Components/HomeBanner";
import Header from "../Components/Header";
import Navbar2 from "../Components/Navbar2";
import Parallax from "../Components/Parallax";
import AboutSection from "../Components/AboutSection";
import Footer from "../Components/Footer";
import CountryWeDealWith from "../Components/CountryWeDealWith";
import Testimonials from "../Components/Testimonials";
import OurServices from "../Components/OurServices";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HomeBanner />
      <AboutSection />
      <Parallax />
      <CountryWeDealWith />
      <Testimonials />
      <OurServices />
      <Footer />
    </div>
  );
};
