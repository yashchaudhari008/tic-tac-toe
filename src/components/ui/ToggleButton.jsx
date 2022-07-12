import React, { useState } from "react";
import "./ToggleButton.css";

export default function ToggleButton() {
	const [toggle, setToggle] = useState(false);
	return (
		<div
			className={toggle ? "toggleButton" : "toggleButton toggleOn"}
			onClick={() => {
				setToggle((old) => !old);
			}}
		>
			<div className="toggleButtonHandler"></div>
		</div>
	);
}
