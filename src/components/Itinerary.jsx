import Reaction from "./Reaction";
import "../shows.css";


export default function Itinerary(props) {
  let { name, price, description, photo, duration, id } = props;
  console.log(name)
  console.log(id)
  console.log(props)
  

  return (
    <>
      <div className="divShow">
        <div className="mainShow2">
          <div className="imgshow">
            <img className="" src={photo[0]} alt={name} />
          </div>
          <div className="divInfo">
            <h3> {name} </h3>
            <h5>{description}</h5>
            <h5>Price: U$D{price} </h5>
            <h5>Duration: {duration} hours </h5>
            <div className="reactions">
              <Reaction itineraryId={id}/>
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
}
