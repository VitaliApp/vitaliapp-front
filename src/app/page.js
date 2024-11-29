"use client";
import React from "react";

import NavBar from "./features/landing/components/NavBar-landing";
import HeroSection from "./features/landing/components/HeroSection";
import Info from "./features/landing/components/Info";
import Functions from "./features/landing/components/Functions";
import Benefits from "./features/landing/components/Benefits";
import Services from "./features/landing/components/Services";
import Health from "./features/landing/components/Health";
import Footer from "./features/landing/components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroSection />
      <Info />
      <Services />
      <Health/>
      <Benefits />
      {/* <Functions /> */}
      <Footer/>
    </React.Fragment>
  );
}
