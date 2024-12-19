import React from "react";
import DestinationCard from "./DestinationCard";
import Rome from "../assets/rome.jpg";

function Destinations() {
  return (
    <div style={{ marginTop: "5rem", marginBottom:"15rem" }}>
      <h3 style={{ marginRight: "5em", marginBottom:"3rem" }}>Top Destinations</h3>
      <div style={{ display: "flex", justifyContent: "center", gap:"10rem" }}>
        <DestinationCard image={Rome} text1={"Rome, Italy"} text2={"$5k"} tripLenght={"15 Days Trip"}/>
        <DestinationCard image="data:image/jpeg;base64,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" text1={"London, UK"} text2={"$4,2k"} tripLenght={"12 Days Trip"}/>
        <DestinationCard image="https://imageio.forbes.com/specials-images/imageserve/620797a2580d5aa7e1d9ed04/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" text1={"Full Europe"} text2={"$15k"} tripLenght={"28 Days Trip"}/>

      </div>
    </div>
  );
}

export default Destinations;