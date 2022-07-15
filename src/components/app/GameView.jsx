import React, { useState } from "react";
import Grid from "./Grid";
import { getResults, isGameComplete } from "./gameLogic.js";
import "./GameView.css";

export default function GameView({ computerMode }) {
	const [gridState, setGridState] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [turn, setTurn] = useState("x");
	const switchTurn = () => {
		setTurn((old) => {
			if (old === "x") return "o";
			return "x";
		});
	};
	return (
		<div id="gameView">
			<h1>
				{!isGameComplete(gridState)
					? `${turn.toUpperCase()}'s Turn`
					: `${getResults(gridState)}, Game Over!`}
			</h1>
			<Grid
				gridState={gridState}
				setGridState={setGridState}
				turn={turn}
				switchTurn={switchTurn}
				computerMode={computerMode}
			/>
		</div>
	);
}
