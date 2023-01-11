import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout(props) {
  return (
    <div>
      <NavBar />

      <div className="container-layout ">
        {/* <Home1/>
        <Home2/> */}
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
