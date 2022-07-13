import React from "react";
import MainMenu from "./MainMenu";
import { nextMove } from "./GameUtils";
import GameView from "./GameView";

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
				display: "grid",
				placeItems: "center",
			}}
		>
			{gameState === 0 && <MainMenu setGameState={setGameState} />}
			{gameState === 1 && <GameView />}
			{gameState === 2 && <GameView computerMode={true} />}
		</div>
	);
}
