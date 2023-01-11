import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div>
      <ul className="flex justify-center">
        <Link className="link" to="/hotels">
          <li className="btn-fo">Hotels</li>
        </Link>
        <Link className="link" to="/cities">
          <li className="btn-fo">Cities</li>
        </Link>
      </ul>
    </div>
  );
}
