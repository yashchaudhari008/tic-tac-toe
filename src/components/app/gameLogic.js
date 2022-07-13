/* Any number greater than 0 is winning*/
export const isWinningState = (state) =>
	state[0][0] === state[0][1] &&
	state[0][0] === state[0][2] &&
	state[0][0] !== null
		? 1
		: state[1][0] === state[1][1] &&
		  state[1][0] === state[1][2] &&
		  state[1][0] !== null
		? 2
		: state[2][0] === state[2][1] &&
		  state[2][0] === state[2][2] &&
		  state[2][0] !== null
		? 3
		: state[0][0] === state[1][0] &&
		  state[0][0] === state[2][0] &&
		  state[0][0] !== null
		? 4
		: state[0][1] === state[1][1] &&
		  state[0][1] === state[2][1] &&
		  state[0][1] !== null
		? 5
		: state[0][2] === state[1][2] &&
		  state[0][2] === state[2][2] &&
		  state[0][2] !== null
		? 6
		: state[0][0] === state[1][1] &&
		  state[0][0] === state[2][2] &&
		  state[0][0] !== null
		? 7
		: state[0][2] === state[1][1] &&
		  state[0][2] === state[2][0] &&
		  state[0][2] !== null
		? 8
		: -1;

/* Check if game is ended or not*/
export const isGameComplete = (state) => {
	if (isWinningState(state) > 0) return true; // Someone already won the game
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (state[i][j] === null) return false; // There is a empty box in grid
		}
	}
	return true;
};

/* Play move if possible 
	returns [played, newState]
	played -> if player played a valid move
	newState -> new state of grid
*/
export const playMove = (state, i, j, player) => {
	if (state[i][j] === null) {
		return [
			true,
			state.map((row, m) =>
				row.map((col, n) => (m === i && n === j ? player : col))
			),
		];
	}
	return [false, state];
};

/* Gets Opponent Symbol*/
export const getOpponent = (player) => (player === "x" ? "o" : "x");

/*	Return's game result to show on screen*/
export const getResults = (state, player) => {
	if (isWinningState(state) > 0)
		return `'${getOpponent(player).toUpperCase()}' Won`;
	return "It a Tie";
};
