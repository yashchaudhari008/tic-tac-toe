import React from "react";
import Grid from "../ui/Grid";

export default function GameWindow() {
	const [gameState, setGameState] = React.useState("000000000");
	const [turn, setTurn] = React.useState("x");
	return (
		<div style={{ flex: 1 }}>
			<Grid
				primaryAccent="#000000"
				secondaryAccent="#ADAAA2"
				ternaryAccent="#F3D48C"
				sideLength={500}
				state={gameState}
				setGameState={setGameState}
				turn={turn}
				setTurn={setTurn}
			/>
		</div>
	);
}
