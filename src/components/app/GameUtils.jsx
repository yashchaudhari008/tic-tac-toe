export const checkWinner = (board) => {
	// null : Game is not over
	// x : X won
	// o : O won
	// t : Tie
	let winner = "t";
	for (let i = 0; i < 3; i++) {
		if (
			board[i][0] === board[i][1] &&
			board[i][0] === board[i][2] &&
			board[i][0] !== null
		)
			winner = board[i][0];
		if (
			board[0][i] === board[1][i] &&
			board[0][i] === board[2][i] &&
			board[0][i] !== null
		)
			winner = board[0][i];
	}
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
	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 3; j++)
			if (board[i][j] === null && winner === "t") return null;
	return winner;
};

export const nextMove = (board, alpha, turn) => {
	const minimax = (board, alpha, turn) => {
		const scores = {
			x: alpha === "x" ? 10 : -10,
			o: alpha === "o" ? 10 : -10,
			t: 0,
		};
		const result = checkWinner(board);
		if (result !== null) return scores[result];
		if (turn === alpha) {
			let score = -Infinity;
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (board[i][j] === null) {
						board[i][j] = turn;
						let newScore = minimax(board, alpha, turn === "x" ? "o" : "x");
						board[i][j] = null;
						score = Math.max(score, newScore);
					}
				}
			}
			return score;
		} else {
			let score = Infinity;
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (board[i][j] === null) {
						board[i][j] = turn;
						let newScore = minimax(board, alpha, turn === "x" ? "o" : "x");
						board[i][j] = null;
						score = Math.min(score, newScore);
					}
				}
			}
			return score;
		}
	};
	let bestScore = -Infinity;
	let bestMove = { i: null, j: null };
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			// Is spot available?
			if (board[i][j] === null) {
				// Play that spot
				board[i][j] = turn;
				let score = minimax(board, alpha, turn === "x" ? "o" : "x");
				board[i][j] = null;
				if (score > bestScore) {
					bestScore = score;
					bestMove = { i, j };
				}
			}
		}
	}
	return bestMove;
};
