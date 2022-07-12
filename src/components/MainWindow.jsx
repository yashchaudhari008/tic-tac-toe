import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import GameWindow from "./app/GameWindow";
import "./MainWindow.css";

export default function MainWindow() {
	const [gameState, setGameState] = useState(0);
	// gameState values
	// 0 -> Main Menu
	// 1 -> Game View (Normal)
	// 2 -> Game View (Computer)
	return (
		<div id="MainWindow">
			<Header />
			<GameWindow gameState={gameState} setGameState={setGameState} />
			<Footer />
		</div>
	);
}
