import React from "react";
import "./WinLine.css";
// Function to return one of 8 possible winning states
const winLineState = (state) =>
	state[0][0] === state[0][1] &&
	state[0][0] === state[0][2] &&
	state[0][0] !== null
		? 1
		: state[1][0] === state[1][1] &&
		  state[1][0] === state[1][2] &&
		  state[1][0] !== null
		? 2
		: state[2][0] === state[2][1] &&
		  state[2][0] === state[2][2] &&
		  state[2][0] !== null
		? 3
		: state[0][0] === state[1][0] &&
		  state[0][0] === state[2][0] &&
		  state[0][0] !== null
		? 4
		: state[0][1] === state[1][1] &&
		  state[0][1] === state[2][1] &&
		  state[0][1] !== null
		? 5
		: state[0][2] === state[1][2] &&
		  state[0][2] === state[2][2] &&
		  state[0][2] !== null
		? 6
		: state[0][0] === state[1][1] &&
		  state[0][0] === state[2][2] &&
		  state[0][0] !== null
		? 7
		: state[0][2] === state[1][1] &&
		  state[0][2] === state[2][0] &&
		  state[0][2] !== null
		? 8
		: false;
export default function WinLine({ state, color }) {
	return winLineState(state) ? (
		<div
			className={`win-line line-${winLineState(state)}`}
			style={{ backgroundColor: color }}
		/>
	) : null;
}
