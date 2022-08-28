import React, { useState } from "react";
import Grid from "./Grid";
import Button from "../ui/Button";
import { getResults, isGameComplete } from "./gameLogic.js";
import "./GameView.css";

export default function GameView({ computerMode }) {
	const defaultState = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	const defaultTurn = "x";
	const [gridState, setGridState] = useState(defaultState);
	const [turn, setTurn] = useState(defaultTurn);
	const switchTurn = () => {
		setTurn((old) => {
			if (old === "x") return "o";
			return "x";
		});
	};
	const resetGame = () => {
		setGridState(defaultState);
		setTurn(defaultTurn);
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
			{isGameComplete(gridState) && (
				<div>
					<Button
						buttonText={"Restart"}
						smallBtn={true}
						onClickHandler={resetGame}
					/>
				</div>
			)}
		</div>
	);
}
