import React, { useEffect } from "react";
import styled from "styled-components";

// Styled components for the parallax effect
const ParallaxContainer = styled.div`
  margin: 0 auto;
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  overflow: hidden;
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-style: preserve-3d;
  pointer-events: none;
`;

const BackgroundImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

// React component for the parallax effect
const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxLayers = document.querySelectorAll(".parallax-layer");

      parallaxLayers.forEach((layer, index) => {
        const speed = 0.5 * (index + 1);
        const yPos = -(scrollY * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxContainer className=" hidden lg:block relative h-[20vh] md:h-[30vh]">
      {/* Foreground Content */}
      <div className=" absolute z-30 ml-28 w-[40vw] text-white py-24">
        <h1 className="text-2xl md:text-4xl font-bold ">
          BUYER OF FERROUS & NON-FERROUS METALS IN LONDON UK
        </h1>
      </div>
      <div
        className=" text-center absolute bg-green-800  z-30 right-10 w-[15vw] text-white mt-24
      mr-52 hover:bg-white hover:text-green-800 border border-transparent hover:border-2 transition duration-300 ease-in-out"
      >
        <button className="text-2xl py-5 px-5 font-bold ">Find Out More</button>
      </div>
      <div className="z-10 text-white text-center py-24">
        <h1 className="text-4xl font-bold">Welcome to Parallax Effect</h1>
        <p className="mt-4 text-lg">Scroll down to see the effect</p>
      </div>

      {/* Parallax Layers */}
      <ParallaxLayer className="parallax-layer">
        {/* Background Image - Layer 1 (slow) */}
        <BackgroundImage
          src="https://images.unsplash.com/photo-1559510655-ded96aa6f700?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image Layer 1"
        />
      </ParallaxLayer>
    </ParallaxContainer>
  );
};

export default Parallax;
