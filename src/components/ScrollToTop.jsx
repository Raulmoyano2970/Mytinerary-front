import React from "react";

export default function ScrollToTop() {
  const scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <button className="btn" onClick={scroll}>
        Up
      </button>
    </div>
  );
}


