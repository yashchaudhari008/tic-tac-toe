import React from "react";
import "./GridBox.css";

export default function GridBox({ accent, state, onClick }) {
  return (
    <div className="box" onClick={onClick}>
      {state}
    </div>
  );
}
