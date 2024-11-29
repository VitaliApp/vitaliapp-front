"use client";
import React from "react";

import NavBar from "./features/landing/components/NavBar-landing";
import HeroSection from "./features/landing/components/HeroSection";
import Info from "./features/landing/components/Info";
import Benefits from "./features/landing/components/Benefits";
import Services from "./features/landing/components/Services";
import Health from "./features/landing/components/Health";
import Footer from "./features/landing/components/Footer";

import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Fade cascade damping={0.2}>
        <Slide>
          <HeroSection />
        </Slide>
        <Info />
        <Services />
        <Health />
      </Fade>
      <Fade>
        <Benefits />
      </Fade>
      <Footer />
    </React.Fragment>
  );
}
