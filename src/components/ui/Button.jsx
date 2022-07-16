import React from "react";
import "./Button.css";
export default function Button({
	buttonText,
	iconComponent,
	onClickHandler,
	smallBtn,
	secondaryBtn,
}) {
	return (
		<button
			className={`primaryButton ${secondaryBtn && "secondaryButton"} ${
				smallBtn && "smallButton"
			}`}
			onClick={onClickHandler}
		>
			{iconComponent}
			<p>{buttonText}</p>
		</button>
	);
}
