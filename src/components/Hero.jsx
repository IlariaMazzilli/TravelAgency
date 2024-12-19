import React from "react";
import traveller from "../assets/Traveller.png";

function Hero() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", position:"relative" }}>
      {/* testo */}
      <div className="heroText">
        <h3>BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1>Travel, <span>enjoy</span> and live a new and full life</h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div>
          <button>Find out more</button>
          <a href="/" className="play">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1200 1200"><path fill="#DF6951" d="M600 1200C268.65 1200 0 931.35 0 600S268.65 0 600 0s600 268.65 600 600s-268.65 600-600 600M450 300.45v599.1L900 600z"/></svg>
          <span>Play demo</span>
          </a>
        </div>
      </div>
      {/* immagine */}
      <div className="heroImage">
        <img src={traveller} alt="" />
      </div>
    </div>
  );
}

export default Hero;
