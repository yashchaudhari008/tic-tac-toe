import React from "react";
import "./Button.css";
export default function Button({
	buttonText,
	iconComponent,
	onClickHandler,
	smallBtn,
}) {
	return (
		<button
			className={`primaryButton ${smallBtn && "smallButton"}`}
			onClick={onClickHandler}
		>
			{iconComponent}
			<p>{buttonText}</p>
		</button>
	);
}
