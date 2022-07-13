import React from "react";
import Grid from "./Grid";
import MainMenu from "./MainMenu";

export default function GameWindow({ gameState, setGameState }) {
	const [gridState, setGridState] = React.useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [turn, setTurn] = React.useState("x");
	return (
		<div
			style={{
				flex: 1,
				display: "flex",
				flexFlow: "column wrap",
			}}
		>
			{gameState === 0 && <MainMenu setGameState={setGameState} />}
			{gameState === 1 && (
				<Grid
					state={gridState}
					setGameState={setGridState}
					turn={turn}
					setTurn={setTurn}
				/>
			)}
			{gameState === 2 && (
				<Grid
					state={gridState}
					setGameState={setGridState}
					turn={turn}
					setTurn={setTurn}
				/>
			)}
		</div>
	);
}
