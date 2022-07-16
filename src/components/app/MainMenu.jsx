import React, { useState, useEffect } from "react";
import { FaPlay, FaRobot } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
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

	const [installEvent, setInstallEvent] = useState(null);
	useEffect(() => {
		const handler = (event) => {
			event.preventDefault();
			setInstallEvent(event);
		};
		window.addEventListener("beforeinstallprompt", handler);
		return () => window.removeEventListener("beforeinstallprompt", handler);
	}, []);
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
			{installEvent !== null && (
				<Button
					iconComponent={<FiDownload strokeWidth={3} />}
					buttonText={"Install"}
					onClickHandler={() => {
						installEvent.prompt().then((event) => {
							if (event.outcome === "accepted") {
								setInstallEvent(null);
							}
						});
					}}
					secondaryBtn={true}
				/>
			)}
		</div>
	);
}
