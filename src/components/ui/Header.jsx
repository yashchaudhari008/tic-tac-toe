import React from "react";
import "./Header.css";
import { MdClose } from "react-icons/md";

export default function Header({ gameState, setGameState }) {
	return (
		<>
			<div id="header">
				{gameState !== 0 && (
					<div className="button">
						<MdClose onClick={() => setGameState(0)} />
					</div>
				)}
			</div>
		</>
	);
}
