import React from "react";
import { useWordGame } from "./hooks/useWordGame";

export default function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame();

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        onChange={handleChange}
        disabled={!isTimeRunning}
        value={text}
        ref={textBoxRef}
      />
      <h4>Time Remaing: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start Typing
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}
