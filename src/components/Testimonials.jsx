import React from "react";
import "../index.scss";

function Testimonials() {
  return (
    <div
      style={{
        marginTop: "8rem",
        display: "flex",
        justifyContent: "center",
        gap: "10rem",
      }}
    >
      <div style={{marginTop: "10rem"}}>
        <h3>What People Say About Us</h3>
      </div>
      <div className="cardsWrapper">
        {/* card */}
        <div class="login-container">
          <div class="profile-img"></div>
          <div class="description">
            Maddie is a front end web developer in New York. She has worked in
            the field for 10 years now. Check out her projects in the links
            below. She is available for hire as well.
          </div>
          <p style={{ marginTop: "2rem" }}>
            {" "}
            <b>Maddie Taylor</b> <br />
            Paris, France
          </p>
        </div>

        <div class="login-container">
          <div class="profile-img"></div>
          <div class="description">
            Maddie is a front end web developer in New York. She has worked in
            the field for 10 years now. Check out her projects in the links
            below. She is available for hire as well.
          </div>
          <p style={{ marginTop: "2rem" }}>
            {" "}
            <b>Maddie Taylor</b> <br />
            Paris, France
          </p>
        </div>

        <div class="login-container">
          <div class="profile-img"></div>
          <div class="description">
            Maddie is a front end web developer in New York. She has worked in
            the field for 10 years now. Check out her projects in the links
            below. She is available for hire as well.
          </div>
          <p style={{ marginTop: "2rem" }}>
            {" "}
            <b>Maddie Taylor</b> <br />
            Paris, France
          </p>
        </div>

        <div class="login-container">
          <div class="profile-img"></div>
          <div class="description">
            Maddie is a front end web developer in New York. She has worked in
            the field for 10 years now. Check out her projects in the links
            below. She is available for hire as well.
          </div>
          <p style={{ marginTop: "2rem" }}>
            {" "}
            <b>Maddie Taylor</b> <br />
            Paris, France
          </p>
        </div>


      </div>
    </div>
  );
}

export default Testimonials;
