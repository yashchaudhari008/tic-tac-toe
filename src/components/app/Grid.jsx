import React from "react";
import "./Grid.css";
import GridBox from "./GridBox";
import WinLine from "./WinLine";
import { stringInsert } from "../utils/utils";
import { FiPlus } from "react-icons/fi";
import { MdOutlineCircle } from "react-icons/md";

export default function Grid({
	primaryAccent,
	secondaryAccent,
	ternaryAccent,
	state,
	setGameState,
	turn,
	setTurn,
}) {
	return (
		<div className="grid-container">
			<div className="game-board" style={{ backgroundColor: primaryAccent }}>
				{state.split("").map((s, index) => (
					<GridBox
						key={index}
						// Modify game-state and toggle turn
						onClick={() => {
							if (state[index] === "0") {
								setGameState(stringInsert(state, turn, index));
								setTurn(turn === "x" ? "o" : "x");
							}
						}}
					>
						{/* Place X if box contains X */}
						{s === "x" && (
							<FiPlus
								style={{ transform: "rotate(45deg) scale(1.5)" }}
								strokeWidth={1.5}
								color={secondaryAccent}
							/>
						)}
						{/* Place O if box contains O */}
						{s === "o" && <MdOutlineCircle color={secondaryAccent} />}
					</GridBox>
				))}
				<WinLine state={state} color={ternaryAccent} />
			</div>
		</div>
	);
}
