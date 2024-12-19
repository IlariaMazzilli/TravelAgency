import React from 'react';
import axon from "../assets/axon.svg";
import alitalia from "../assets/alitalia.svg";
import jestar from "../assets/jestar.svg";
import expedia from "../assets/expedia.svg";
import qantas from "../assets/qantas.svg";

function Companies() {
  return (
    <div style={{display:"flex", gap:"5rem", justifyContent:"center", marginTop:"5rem"}}>
        <img src={axon} alt="" />
        <img src={jestar} alt="" />
        <img src={expedia} alt="" />
        <img src={qantas} alt="" />
        <img src={alitalia} alt="" />
    </div>
  )
}

export default Companies