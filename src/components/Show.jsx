import React from "react";
import "../shows.css";
import Comments from "./Comments";
export default function Show(props) {
  let { show } = props;
  console.log(show);

  return (
    <>
      <div className="divShow">
        <div className="mainShow">
          <div className="imgshow">
            <img className="" src={show.photo} alt={show.name} />
          </div>
          <div className="divInfo">
            <h3 className="">{show.name} </h3>
            <h4>{show.description}</h4>
            <h4>Price: U$D{show.price} </h4>
            <div>
            <Comments eventId={show._id}></Comments>
        </div>
          </div>
     

        </div>
      </div>
    </>
  );
}
