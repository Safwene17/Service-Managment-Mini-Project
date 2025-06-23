import React from "react";
import "./Join.css";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div class="div1">
      <h1>Join as a client or freelancer</h1>
      <div class="card-list">
        <Link to="/Registerclient" class="card-item">
          <h3>I'm a client, looking for a service </h3>
          <div class="arrow">
            <i class="fas fa-arrow-right card-icon"></i>
          </div>
        </Link>

        <Link to="/Registerprest" class="card-item">
          <h3>I'm a service provider, looking for a work.</h3>
          <div class="arrow">
            <i class="fas fa-arrow-right card-icon"></i>
          </div>
        </Link>
      </div>

      <h6>
        Already have an account?
        <Link to="/Login" style={{ textDecoration: "none" }}>
          {" "}
          Log in
        </Link>
      </h6>
    </div>
  );
};

export default Join;


