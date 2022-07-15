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
	return checkWinner(state) !== null;
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
export const getResults = (state) => {
	const results = {
		x: "X Won",
		o: "O Won",
		t: "It's a Tie",
	};
	return results[checkWinner(state)];
};
export const checkWinner = (board) => {
	// null : Game is not over
	// x : X won
	// o : O won
	// t : Tie

	// If no moves left and no winner result is tie
	let winner = "t";

	for (let i = 0; i < 3; i++) {
		// Check Horizontal lines
		if (
			board[i][0] === board[i][1] &&
			board[i][0] === board[i][2] &&
			board[i][0] !== null
		)
			winner = board[i][0];
		// Check Vertical lines
		if (
			board[0][i] === board[1][i] &&
			board[0][i] === board[2][i] &&
			board[0][i] !== null
		)
			winner = board[0][i];
	}
	// Check Diagonals
	if (
		board[0][0] === board[1][1] &&
		board[0][0] === board[2][2] &&
		board[0][0] !== null
	)
		winner = board[0][0];
	if (
		board[0][2] === board[1][1] &&
		board[0][2] === board[2][0] &&
		board[0][2] !== null
	)
		winner = board[0][2];

	// Check empty squares
	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 3; j++)
			if (board[i][j] === null && winner === "t") return null;

	// Return result if game is concluded
	return winner;
};

export const nextAIMove = (board, turn) => {
	const minimax = (board, alpha, turn) => {
		const scores = {
			x: alpha === "x" ? 1 : -1,
			o: alpha === "o" ? 1 : -1,
			t: 0,
		};

		// Check if game is over
		const result = checkWinner(board);
		// If game is over return result. Terminal case for recursion
		if (result !== null) return scores[result];

		let score = turn === alpha ? -Infinity : Infinity;
		// Iterate for all rows
		for (let i = 0; i < 3; i++)
			// Iterate for all columns
			for (let j = 0; j < 3; j++)
				// Is spot available?
				if (board[i][j] === null)
					// Calculate new score as min/max of current tree
					score = (turn === alpha ? Math.max : Math.min)(
						score,
						// Call minimax on subtree after making move
						minimax(
							playMove(board, i, j, turn)[1],
							alpha,
							turn === "x" ? "o" : "x"
						)
					);
		return score;
	};

	let bestScore = -Infinity;
	let bestMove = { i: null, j: null };
	// Iterate for all rows
	for (let i = 0; i < 3; i++)
		// Iterate for all columns
		for (let j = 0; j < 3; j++)
			// Is spot available?
			if (board[i][j] === null) {
				// Play that spot and get score
				let score = minimax(
					playMove(board, i, j, turn)[1],
					turn,
					turn === "x" ? "o" : "x"
				);
				// Check if move made gives better score than previous score
				if (score > bestScore) {
					bestScore = score;
					bestMove = { i, j };
				}
			}
	return bestMove;
};
