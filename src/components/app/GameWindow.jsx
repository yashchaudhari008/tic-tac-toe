import React from "react";
import Grid from "../ui/Grid";
import MainMenu from "./MainMenu";

export default function GameWindow({ gameState, setGameState }) {
  const [gridState, setGridState] = React.useState("000000000");
  const [turn, setTurn] = React.useState("x");
  return (
    <div style={{ flex: 1 }}>
      {gameState === 0 && <MainMenu setGameState={setGameState} />}
      {gameState === 1 && (
        <Grid
          primaryAccent="#000000"
          secondaryAccent="#ADAAA2"
          ternaryAccent="#F3D48C"
          sideLength={500}
          state={gridState}
          setGameState={setGridState}
          turn={turn}
          setTurn={setTurn}
        />
      )}
      {gameState === 2 && (
        <Grid
          primaryAccent="#000000"
          secondaryAccent="#ADAAA2"
          ternaryAccent="#F3D48C"
          sideLength={500}
          state={gridState}
          setGameState={setGridState}
          turn={turn}
          setTurn={setTurn}
        />
      )}
    </div>
  );
}
