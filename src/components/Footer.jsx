import React from "react";
import github from "../img/icone-github-orange.png";
import CallToAction from "./CallToAction";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
<div className="services">
  <h4>SERVICES</h4>
<p>Branding</p> 
<p>Marketing</p> 
<p>Advertisement</p> 
</div>

<div className="legal">
 <h4>LEGAL</h4>
 <p>Terms of use</p> 
 <p>Privacy policy</p> 
 <p>Cookie policy</p> 
</div>

      <div className="git">
        <h4>DEVELOPERS</h4>
        <a href="https://github.com/CarolinaPerez1992">
         <div> 
          <img className="" width="22" src={github} alt="" /></div>
          <span>Carolina Perez</span>
        </a>
        <a href="https://github.com/Raulmoyano2970">
          <img className="" width="22" src={github} alt="" />
          <span>Raul Moyano</span>
        </a>
      </div>
      <div>
        <ScrollToTop />
      </div>
    </div>
  );
}
