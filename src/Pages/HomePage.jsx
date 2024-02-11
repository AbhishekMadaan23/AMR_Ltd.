import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Parallax from "../Components/Parallax";
import AboutSection from "../Components/AboutSection";
import CountryWeDealWith from "../Components/CountryWeDealWith";
import Testimonials from "../Components/Testimonials";
import OurServices from "../Components/OurServices";
import ParallaxMobile from "../Components/ParallaxMobile";

export const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <AboutSection />
      <Parallax />
      <ParallaxMobile />
      <CountryWeDealWith />
      <Testimonials />
      <OurServices />
    </div>
  );
};
