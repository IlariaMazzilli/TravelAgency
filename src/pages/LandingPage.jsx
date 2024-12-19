import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Decore from "../assets/Decore.png";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Companies from "../components/Companies";
import Footer from "../components/Footer";


function LandingPage() {
  return (
    <div className="landingContainer">
      <img src={Decore} alt="" className="decore" />
      <div className="content">
        <Navbar />
        <Hero />
        <Services />
        <Destinations />
        <Steps />
        <Testimonials />
        <Companies />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
