import React from "react";

export default function FormHotel(props) {
  let { fx } = props;
  return (
    <div>
      <select name="orden" id="asydes" onChange={fx}>
        <option value="ascendent">Ascendent</option>
        <option value="descent">Descendent</option>
      </select>
    </div>
  );
}
