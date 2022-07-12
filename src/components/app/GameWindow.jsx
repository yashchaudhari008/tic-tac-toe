import React from "react";
import MainMenu from "./MainMenu";

export default function GameWindow({ gameState, setGameState }) {
	return (
		<div style={{ flex: 1 }}>
			{gameState === 0 && <MainMenu setGameState={setGameState} />}
			{gameState === 1 && <div>Game View</div>}
			{gameState === 2 && <div>Game View Computer</div>}
		</div>
	);
}
