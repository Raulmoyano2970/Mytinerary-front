import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="error">
      <h1>Not Found</h1>
      <Link to="/">
        <button className="gohome">Go Home!</button>
      </Link>
    </div>
  );
}
