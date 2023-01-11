import React from "react";
import Boton from "./Boton";
import cities from "../data/dataCity";
import hotels from "../data/hotels";
import { useState, useEffect } from "react";
import "../carousel.css";

export default function Carousel(props) {
  let [numberOfChange, setNumberOfChange] = useState(0);
  let [id, setId] = useState(0);
  let next = () => {
    if (numberOfChange + 2 < hotels.length - 1) {
      setNumberOfChange(numberOfChange + 1);
    } else {
      setNumberOfChange(0);
    }
    clearInterval(id);
  };
  let prev = () => {
    if (numberOfChange === 0) {
      setNumberOfChange(cities.length - 3);
    } else {
      setNumberOfChange(numberOfChange - 1);
    }
    clearInterval(id);
  };
  useEffect(() => {
    let idInterval = setInterval(() => {
      next();
    }, 5000);
    setId(idInterval);
    return clearInterval(id);
  }, [numberOfChange]);

  return (
    <div className="general">
      <div className="caja1">
        <h2 className="citiesyhotels">CITIES & HOTELS</h2>
        <div className="conteinerCarousel">
          <Boton icon={"<"} onClick={prev} />
          <div className="carousel">
            <img
              src={cities[numberOfChange].photo}
              alt="sujeto"
              className="photoCarrusel"
            />
            <img
              src={cities[numberOfChange + 1].photo}
              alt="sujeto"
              className="photoCarrusel"
            />
            {/* <img
              src={cities[numberOfChange + 2].photo}
              alt="sujeto"
              className="photoCarrusel"
            /> */}
            <img
              src={hotels[numberOfChange + 2].photo[0]}
              alt="sujeto"
              className="photoCarrusel"
            />
            <img
              src={hotels[numberOfChange + 2].photo[1]}
              alt="sujeto"
              className="photoCarrusel"
            />
            {/* <img
              src={hotels[numberOfChange + 2].photo[2]}
              alt="sujeto"
              className="photoCarrusel"
            /> */}
          </div>
          <Boton icon={">"} onClick={next} />
        </div>
      </div>
    </div>
  );
}
