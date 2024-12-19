import React from "react";
import "../index.scss";
import crosses from "../assets/crosses.svg";
import weather from "../assets/weather.svg";
import plane from "../assets/planeCard.svg";
import mic from "../assets/mic.svg";
import settings from "../assets/settings.svg"

function Services() {
  return (
    <div className="servicesDiv">
      <div>
        <h3>We Offer The Best Services</h3>
        <img src={crosses} alt="" className="crosses" />
      </div>
      <div className="cardsContainer">
        <div class="card" style={{ width: "15rem", padding: "1rem" }}>
          <img src={weather} class="card-img-top" alt="..." />
          <div class="card-body" style={{ display: "block" }}>
            <h3 className="cardTitle" style={{ fontSize: "1.2em" }}>
              Calculated Weather
            </h3>
            <p class="card-text">
              We only book with the best weather conditions so you can enjoy
              your flight!
            </p>
          </div>
        </div>

        <div class="card selectedCard" style={{ width: "15rem", padding: "1rem" }}>
          <img src={plane} class="card-img-top" alt="..."/>
          <div class="card-body" style={{ display: "block" }}>
            <h3 className="cardTitle" style={{ fontSize: "1.2em" }}>
             Best Flights
            </h3>
            <p class="card-text">
              Only the best flight companies with the best offers!
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "15rem", padding: "1rem" }}>
          <img src={mic} class="card-img-top" alt="..."/>
          <div class="card-body" style={{ display: "block" }}>
            <h3 className="cardTitle" style={{ fontSize: "1.2em" }}>
             Local Events
            </h3>
            <p class="card-text">
              Best locations with lots of fun activities and events to partecipate in!
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "15rem", padding: "1rem" }}>
          <img src={settings} class="card-img-top" alt="..."/>
          <div class="card-body" style={{ display: "block" }}>
            <h3 className="cardTitle" style={{ fontSize: "1.2em" }}>
             Customization
            </h3>
            <p class="card-text">
              We listen to your needs and we give you our best options!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
