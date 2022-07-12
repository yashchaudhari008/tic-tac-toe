import React from "react";
import Cross from "./Cross";
import "./Grid.css";
import GridBox from "./GridBox";
import Nought from "./Nought";

export default function Grid({
  primaryAccent,
  secondaryAccent,
  ternaryAccent,
  state,
  sideLength,
  setGameState,
  turn,
  setTurn,
}) {
  const winLineWidth = 15;
  const gap = 6;
  if (state.length !== 9) throw EvalError("state should be 9 characters");
  const [winLineStyle, setWinLineStyle] = React.useState({ opacity: 0 });
  React.useEffect(() => {
    if (state[0] === state[1] && state[0] === state[2] && state[0] !== "0") {
      setWinLineStyle({
        opacity: 1,
        top: "calc(-100% / 3)",
        left: "50%",
        rotate: "90deg",
      });
    }
    if (state[3] === state[4] && state[3] === state[5] && state[3] !== "0") {
      setWinLineStyle({
        opacity: 1,
        left: "50%",
        rotate: "90deg",
      });
    }
    if (state[6] === state[7] && state[6] === state[8] && state[6] !== "0") {
      setWinLineStyle({
        opacity: 1,
        top: "calc(100% / 3)",
        left: "50%",
        rotate: "90deg",
      });
    }
    if (state[0] === state[3] && state[0] === state[6] && state[0] !== "0") {
      setWinLineStyle({ opacity: 1, left: "calc(100% / 6)" });
    }
    if (state[1] === state[4] && state[1] === state[7] && state[1] !== "0") {
      setWinLineStyle({
        opacity: 1,
        left: "50%",
      });
    }
    if (state[2] === state[5] && state[2] === state[8] && state[2] !== "0") {
      setWinLineStyle({
        opacity: 1,
        left: "calc(100% / 6 * 5)",
      });
    }
    if (state[0] === state[4] && state[0] === state[8] && state[0] !== "0") {
      setWinLineStyle({
        opacity: 1,
        left: "50%",
        rotate: "-45deg",
      });
    }
    if (state[2] === state[4] && state[2] === state[6] && state[2] !== "0") {
      setWinLineStyle({
        opacity: 1,
        left: "50%",
        rotate: "45deg",
      });
    }
  }, [state, winLineWidth]);
  return (
    <div
      id="Grid"
      className="game-board"
      style={{
        backgroundColor: primaryAccent,
        height: `500px`,
        width: `500px`,
        transformOrigin: "50% 0%",
        gap: `${gap}px`,
        transform: `scale(${sideLength / 500})`,
      }}
    >
      {state.split("").map((s, index) => (
        <GridBox
          key={index}
          onClick={() => {
            setGameState(
              state.substring(0, index) + turn + state.substring(index + 1)
            );
            setTurn(turn === "x" ? "o" : "x");
          }}
          state={
            s === "0"
              ? null
              : s === "x"
              ? Cross(secondaryAccent, sideLength / 500)
              : Nought(secondaryAccent, sideLength / 500)
          }
        />
      ))}
      <div
        className="win-line"
        style={{
          ...winLineStyle,
          transform: "translateX(-50%) scaleY(1.3)",
          transformOrigin: "0% 50%",
          backgroundColor: ternaryAccent,
          height: `500px`,
          width: `${winLineWidth}px`,
        }}
      ></div>
    </div>
  );
}
