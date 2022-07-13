import React from "react";
import "./Header.css";
import { AiFillSetting } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export default function Header({ gameState, setGameState }) {
	return (
		<>
			<div id="header">
				<div className="button">
					<AiFillSetting />
				</div>
				<div className="button">
					{gameState === 0 && <MdClose onClick={() => window.history.back()} />}
				</div>
			</div>
		</>
	);
}
