import React from "react";
import { FaPlay, FaRobot } from "react-icons/fa";
import Button from "../ui/Button";
import "./MainMenu.css";

const gameModes = {
	normal: 1,
	computer: 2,
};

export default function MainMenu({ setGameState }) {
	const openGameView = (gameMode) => {
		setGameState(gameMode);
	};
	return (
		<div className="mainMenu">
			<h1 className="heading">Tic-Tac-Toe</h1>
			<div className="buttonHolder">
				<Button
					iconComponent={<FaPlay />}
					buttonText={"Play"}
					onClickHandler={() => openGameView(gameModes.normal)}
				/>
				<Button
					iconComponent={<FaRobot />}
					buttonText={"Play (Computer)"}
					onClickHandler={() => openGameView(gameModes.computer)}
				/>
			</div>
		</div>
	);
}
