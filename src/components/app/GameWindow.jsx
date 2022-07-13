import React from "react";
import MainMenu from "./MainMenu";
import GameView from "./GameView";

export default function GameWindow({ gameState, setGameState }) {
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
