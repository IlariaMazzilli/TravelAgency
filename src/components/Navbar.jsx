import React from "react";
import Jadoo from "../assets/Jadoo.svg";
import "../index.scss";
import { Link } from "react-router-dom";


function Navbar() {
 
  return (
    <nav>
      <img src={Jadoo} alt="Jadoo" />

      <ul>
        <li>
          {" "}
          <Link to="/">Destinations</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Hotels</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Flights</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Bookings</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Login</Link>
        </li>
        <button type="button" class="btn btn-outline-dark">
          Sign up
        </button>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            EN
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                IT
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
