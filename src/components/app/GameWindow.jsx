import React from "react";
import Grid from "./Grid";
import MainMenu from "./MainMenu";
import { nextMove } from "./GameUtils";

export default function GameWindow({ gameState, setGameState }) {
	const human = "o";
	const ai = "x";
	const [gridState, setGridState] = React.useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [turn, setTurn] = React.useState(ai);
	React.useEffect(() => {
		if (turn === human) return;
		const next = nextMove(gridState, turn, turn);
		setGridState(
			gridState.map((row, m) =>
				row.map((col, n) => (m === next.i && n === next.j ? turn : col))
			)
		);
		setTurn(human);
	}, [gridState, turn, setGridState]);
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
