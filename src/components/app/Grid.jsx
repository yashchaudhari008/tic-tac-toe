import React from "react";
import "./Grid.css";
import GridBox from "./GridBox";
import WinLine from "./WinLine";
import { FiPlus } from "react-icons/fi";
import { MdOutlineCircle } from "react-icons/md";

export default function Grid({ state, setGameState, turn, setTurn }) {
	return (
		<div className="grid-container">
			<div className="game-board">
				<div className="grid-lines" />
				{state.map((row, i) =>
					row.map((col, j) => (
						<GridBox
							key={3 * i + j}
							// Modify game-state and toggle turn
							onClick={() => {
								if (state[i][j] === null) {
									setGameState(
										state.map((row, m) =>
											row.map((col, n) => (m === i && n === j ? turn : col))
										)
									);
									setTurn(turn === "x" ? "o" : "x");
								}
							}}
						>
							{/* Place X if box contains X */}
							{col === "x" && (
								<FiPlus
									style={{
										transform: "rotate(45deg) scale(1.5)",
										color: "var(--textColor)",
									}}
									strokeWidth={1.5}
								/>
							)}
							{/* Place O if box contains O */}
							{col === "o" && (
								<MdOutlineCircle style={{ color: "var(--textColor)" }} />
							)}
						</GridBox>
					))
				)}
				<WinLine state={state} />
			</div>
		</div>
	);
}
