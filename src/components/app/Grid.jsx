import React from "react";
import "./Grid.css";
import GridBox from "./GridBox";
import WinLine from "./WinLine";
import { FiPlus } from "react-icons/fi";
import { MdOutlineCircle } from "react-icons/md";
import { getOpponent, isGameComplete, playAIMove, playMove } from "./gameLogic";

export default function Grid({
	gridState,
	setGridState,
	turn,
	switchTurn,
	computerMode,
}) {
	return (
		<div className="grid-container">
			<div className="game-board">
				<div className="grid-lines" />
				{gridState.map((row, i) =>
					row.map((col, j) => (
						<GridBox
							key={3 * i + j}
							// Modify game-state and toggle turn
							onClick={() => {
								if (!isGameComplete(gridState)) {
									let [played, newState] = playMove(gridState, i, j, turn);
									if (played) {
										if (computerMode && !isGameComplete(newState)) {
											let computerState = playAIMove(
												newState,
												getOpponent(turn)
											);
											setGridState(computerState);
										} else {
											setGridState(newState);
											switchTurn();
										}
									}
								}
							}}
						>
							{/* Place X if box contains X */}
							{col === "x" && <X />}
							{/* Place O if box contains O */}
							{col === "o" && <O />}
						</GridBox>
					))
				)}
				<WinLine state={gridState} />
			</div>
		</div>
	);
}

const X = () => {
	return (
		<FiPlus
			style={{
				transform: "rotate(45deg) scale(1.5)",
				color: "var(--textColor)",
			}}
			strokeWidth={1.5}
		/>
	);
};

const O = () => {
	return <MdOutlineCircle style={{ color: "var(--textColor)" }} />;
};
