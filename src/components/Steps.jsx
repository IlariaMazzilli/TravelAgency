import React from "react";
import chooseDestination from "../assets/chooseDestination.svg";
import makePayment from "../assets/makePayment.svg";
import reachAirport from "../assets/reachAirport.svg";
import Greece from "../assets/greece.svg";
import leaf from "../assets/leaf.svg";
import send from "../assets/send.svg";
import heart from "../assets/heart.svg";

function Steps() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* contenitore titolo e testo */}
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3 style={{ fontSize: "2rem", justifyContent:"left"}}>
            Book Your Next Trip In 3 Easy Steps
          </h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            {/* immagine */}
            <img src={chooseDestination} alt="" />
            {/* testo */}
            <div>
              <h4>Choose Destination</h4>
              <p>Choose the location that you want to visit</p>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "1rem" }}>
              {/* immagine */}
              <img src={makePayment} alt="" />
              {/* testo */}
              <div>
                <h4>Make Payment</h4>
                <p>Make payment to confirm your reservation</p>
              </div>
            </div>
          </div>
          <div>
          <div style={{ display: "flex", gap: "1rem" }}>
              {/* immagine */}
              <img src={reachAirport} alt="" />
              {/* testo */}
              <div>
                <h4>Reach Airport on Selected Date</h4>
                <p>Reach the airport on the selected date</p>
              </div>
            </div>
          </div>
        </div>
        {/* contenitore immagine */}
        <div style={{padding:"1rem", display:"flex", flexDirection:"column", gap:"1rem", boxShadow:"rgba(89, 177, 230, 1) 25px 25px 65px 5px", borderRadius:"10%"}}>
          <img src={Greece} alt=""  style={{borderRadius:"10%"}}/>
          <h4>Trip To Greece</h4>
          <p style={{color:"#84829A"}}>14-16 June </p>
          <div style={{display:"flex", gap:"1rem"}}>
          <img src={leaf} alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="m15 19.923l-6-2.1l-3.958 1.53q-.384.143-.713-.083T4 18.634V6.404q0-.268.13-.489t.378-.307L9 4.077l6 2.1l3.958-1.53q.384-.143.713.054t.329.588v12.384q0 .287-.159.498q-.158.212-.426.298zm-.5-1.22v-11.7l-5-1.745v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z"/>
          </svg>
          <img src={send} alt="" />
          </div>
          <div style={{display:"flex", gap:"1rem", color:"#84829A"}}>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#84829A" d="M12.25 6.5a1.75 1.75 0 0 0-1.75 1.75V41.5H14v-5.25A2.25 2.25 0 0 1 16.25 34h15.5A2.25 2.25 0 0 1 34 36.25v5.25h3.5V23.25a1.75 1.75 0 0 0-1.75-1.75h-5c-.69 0-1.25-.56-1.25-1.25v-12a1.75 1.75 0 0 0-1.75-1.75zm-3 37.5C8.56 44 8 43.44 8 42.75V8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v19.5c0 .69-.56 1.25-1.25 1.25zm7.25-2.5h6.25v-5H16.5zm8.75 0h6.25v-5h-6.25zM18 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m6-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
          <p>24 people going</p>
          <div style={{display:"flex", flex:"1", justifyContent:"flex-end"}}>
            <img src={heart} alt="" style={{marginBottom:"15%"}} />
          </div>
          
          </div>
         
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Steps;
