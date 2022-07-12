import React from "react";
import "./WinLine.css";
// Styles corresponding to positions of 8 winning states
const lineStyles = [
	{ opacity: 0 },
	{
		opacity: 1,
		top: "calc(100% / 6)",
		transform: "rotate(90deg)",
	},
	{ opacity: 1, transform: "rotate(90deg)" },
	{
		opacity: 1,
		top: "calc(100% / 6 * 5)",
		transform: "rotate(90deg)",
	},
	{ opacity: 1, left: "calc(100% / 6)" },
	{ opacity: 1 },
	{ opacity: 1, left: "calc(100% / 6 * 5)" },
	{ opacity: 1, transform: "rotate(-45deg)", height: "150%" },
	{ opacity: 1, transform: "rotate(45deg)", height: "150%" },
];
// Function to return one of 8 possible winning states
const winLineState = (state) =>
	state[0] === state[1] && state[0] === state[2] && state[0] !== "0"
		? 1
		: state[3] === state[4] && state[3] === state[5] && state[3] !== "0"
		? 2
		: state[6] === state[7] && state[6] === state[8] && state[6] !== "0"
		? 3
		: state[0] === state[3] && state[0] === state[6] && state[0] !== "0"
		? 4
		: state[1] === state[4] && state[1] === state[7] && state[1] !== "0"
		? 5
		: state[2] === state[5] && state[2] === state[8] && state[2] !== "0"
		? 6
		: state[0] === state[4] && state[0] === state[8] && state[0] !== "0"
		? 7
		: state[2] === state[4] && state[2] === state[6] && state[2] !== "0"
		? 8
		: 0;
export default function WinLine({ state, color }) {
	const [style, setStyle] = React.useState({});
	React.useEffect(() => {
		setStyle(lineStyles[winLineState(state)]); // Place line to show winning state
	}, [state]);
	return (
		<div
			className="win-line"
			style={{
				...style,
				backgroundColor: color,
				transform: `translate(-50%, -50%) ${style.transform || ""}`,
			}}
		></div>
	);
}
