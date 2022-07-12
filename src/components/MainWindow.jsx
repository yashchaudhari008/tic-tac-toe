import React from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import GameWindow from "./app/GameWindow";
import "./MainWindow.css";

export default function MainWindow() {
  return (
    <div id="MainWindow">
      <Header />
      <GameWindow />
      <Footer />
    </div>
  );
}
