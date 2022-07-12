import React from "react";
import "./Button.css";
export default function Button({ buttonText, iconComponent, onClickHandler }) {
	return (
		<button class="primaryButton" onClick={onClickHandler}>
			{iconComponent}
			<p>{buttonText}</p>
		</button>
	);
}
