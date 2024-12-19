import React from "react";

function DestinationCard({ image, text1, text2, tripLenght }) {
  return (
    <div class="destinationCard" style={{ width: "15rem", padding: "1rem" }}>
      <img src={image} class="destinationCardImg" alt="..." />
      <div class="card-body" style={{ display: "block" }}>
        <div style={{display:"flex", justifyContent:"space-between", padding:"1rem"}}>
          <span>{text1}</span>
          <span>{text2}</span>
        </div>
        <p style={{display:"flex",gap:"1rem", padding:"1rem"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.31 18.9c-.96 1-2.06 2.03-3.31 3.1c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2c4.19 0 7.99 3.21 8 8.17l2.09-2.09L23.5 9.5L19 14l-4.5-4.5l1.41-1.41L18 10.17C17.99 6.55 15.34 4 12 4c-3.35 0-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14q.96-.885 1.77-1.71a2.5 2.5 0 0 1-.27-1.12a2.5 2.5 0 0 1 5 0a2.492 2.492 0 0 1-3.19 2.39"/>
          </svg>
          {tripLenght}
          </p>
      </div>
    </div>
  );
}

export default DestinationCard;
