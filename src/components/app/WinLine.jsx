import React from "react";
import "./WinLine.css";
import { isWinningState } from "./gameLogic.js";

export default function WinLine({ state }) {
	return isWinningState(state) !== -1 ? (
		<div className={`win-line line-${isWinningState(state)}`} />
	) : (
		<></>
	);
}
