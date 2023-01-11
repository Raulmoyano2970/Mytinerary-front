import React from "react";
import "../card2.css";
import { Link } from "react-router-dom";

export default function HotelCard(props) {
  let { datos, id } = props;
  return (
    <>
      <div className="card">
        <div className="face front">
          <img src={datos.photo[0]} alt={datos.name} />
          <h3>{datos.name}</h3>
        </div>
        <div className="face back">
          <h3>{datos.name}</h3>
          <Link to={`/detailhotel/${id}`}>
            <button className="btn">More details</button>
          </Link>
        </div>
      </div>
    </>
  );
}
