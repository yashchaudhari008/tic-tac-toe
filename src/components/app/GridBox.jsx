import React, { Children } from "react";
import "./GridBox.css";

export default function GridBox({ onClick, children }) {
	return (
		<div className="box" onClick={onClick}>
			{children}
		</div>
	);
}
